/*
 * @Author: 姜彦汐
 * @Date: 2021-01-02 11:04:01
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:12:23
 * @Description: 
 * @Site: https://www.undsky.com
 */
const StreamZip = require('node-stream-zip')
const archiver = require('archiver')
const fs = require('fs')
const path = require('path')

const ZIP = Symbol('zip#stream')

module.exports = {
    get zip() {
        if (!this[ZIP]) {
            /**
             * @description: 
             * @param {*} zips
             * @param {*} output
             * @param {*} level
             * @return {*}
             */
            function zip(zips, output, level) {
                return new Promise(function (resolve, reject) {
                    try {
                        const archive = archiver('zip', {
                            zlib: {
                                level: level || this.config.zip.level
                            }
                        });
                        archive.on('warning', err => {
                            if (err.code === 'ENOENT') {

                            } else {
                                archive.abort()
                                reject(err)
                            }
                        });
                        archive.on('error', err => {
                            archive.abort()
                            reject(err)
                        });

                        const _output = fs.createWriteStream(output);
                        _output.on('close', resolve);
                        archive.pipe(_output);

                        zips.forEach(v => {
                            if (v.file) {
                                archive.file(v.file, {
                                    name: v.name || path.basename(v.file)
                                })
                            } else if (v.directory) {
                                archive.directory(v.directory, v.name || path.basename(v.directory))
                            } else {
                                archive.append(v.data, {
                                    name: v.name
                                })
                            }
                        })

                        archive.finalize()
                    } catch (error) {
                        reject(error)
                    }
                });
            }

            /**
             * @description: 
             * @param {*} zipFile
             * @param {*} output
             * @return {*}
             */
            function unzip(zipFile, output) {
                return new Promise(function (resolve, reject) {
                    try {
                        const zip = new StreamZip({
                            file: zipFile,
                            storeEntries: true
                        })
                        zip.on('ready', () => {
                            zip.extract(null, output, (err, count) => {
                                zip.close();
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(count)
                                }
                            });
                        })
                        zip.on('error', err => {
                            zip.close()
                            reject(err)
                        })
                    } catch (error) {
                        reject(error)
                    }
                });
            }

            this[ZIP] = {
                zip,
                unzip
            }
        }
        return this[ZIP]
    }
}