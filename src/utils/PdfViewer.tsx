import { Images } from '@/assets';
import { goBack } from '@/navigation/AppNavigation';
import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text, Image } from 'react-native';
import Pdf from 'react-native-pdf';
import { Icon } from 'react-native-elements';
import { fonts } from '@/style';

const PdfViewer = () => {
    // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const source = require('../assets/files/sample.pdf');  // ios only
    //const source = {uri:'bundle-assets://test.pdf' };
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 13, justifyContent:'center', position:'relative'}}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', position:'absolute', left:10}}
                    onPress={() => goBack()}
                >
                    <Icon name="chevron-left" type="material" size={24} color="#0B6D8E" />
                    <Text style={{ color: "#0B6D8E", fontFamily: fonts.bold }}>Back</Text>
                </TouchableOpacity>
                <Text style={{ color: '#667085', fontFamily: fonts.regular }}>Sample.pdf</Text>
            </View>
            <Pdf
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
        </View>
    )
}
export default PdfViewer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
