const extractFilenameFromUrl = (url: string) =>  {
    // Split the URL by '/' to get the path
    const pathSegments: string[] = url.split('/');
    // Get the last segment which contains the image name
    const imageNameWithExtension: string = pathSegments[pathSegments.length - 1];
    // Remove extension and any additional suffixes
    const imageNameWithoutExtension: string = imageNameWithExtension.split('.')[0].split('_')[0];
    // Decode any percent-encoded characters
    const decodedImageName: string = decodeURIComponent(imageNameWithoutExtension);
    return `${decodedImageName}.jpg`;
}

export default extractFilenameFromUrl