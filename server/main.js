import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  UploadServer.init({
    tmpDir:  '/Users/triton/tmp',
    uploadDir: '/Users/triton/uploads/',
    checkCreateDirectories: true, //create the directories for you
/*    getDirectory: function(fileInfo, formData) {
      // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
      return formData.contentType;
    }, */
    finished: function(fileInfo, formFields) {
      // perform a disk operation
      console.log("Finished upload");
    },
    cacheTime: 100,
    mimeTypes: {
        "xml": "application/xml",
        "vcf": "text/x-vcard"
    }
  });
});