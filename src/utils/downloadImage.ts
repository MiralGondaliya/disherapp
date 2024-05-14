import {PermissionsAndroid} from 'react-native';
import RNFS from 'react-native-fs';

const downloadImage = async (imageUrl: string, imageName: string) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const downloadDir = RNFS.DownloadDirectoryPath;
      const originalImagePath = `${downloadDir}/${imageName}`;

      let finalImagePath = originalImagePath;
      let count = 1;

      while (await RNFS.exists(finalImagePath)) {
        const newImageName = `${imageName.split('.')[0]} (${count})${
          imageName.split('.')[1]
        }`;
        finalImagePath = `${downloadDir}/${newImageName}.jpg`;
        count++;
      }

      const options = {
        fromUrl: imageUrl,
        toFile: finalImagePath,
      };

      const download = RNFS.downloadFile(options);
      download.promise
        .then(res => {
          console.log('Image downloaded successfully!', res);
        })
        .catch(err => {
          console.log('Download error', err);
        });
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.log(err);
  }
};

export default downloadImage;
