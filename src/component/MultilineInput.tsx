import { fonts } from '@/style';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const MultilineInput = () => {
    const [text, setText] = useState('@Yashpoddar @Vikaspoddar @Priyanka Hello team, what do you think about this deal?');
    const [numberOfLines, setNumberOfLines] = useState(1);

    const handleContentSizeChange = (event) => {

        const newHeight = event.nativeEvent.contentSize.height;
        const newNumberOfLines = Math.floor(newHeight / 20);
        setNumberOfLines(newNumberOfLines);
    };

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={{
                        maxHeight: 30 * 3,
                        height: numberOfLines === 1 ? 40 : 29 * numberOfLines,
                        color: '#475467',
                        fontFamily: fonts.regular,
                        fontSize: 14
                    }}
                    multiline={true}
                    value={text}
                    onChangeText={(value) => setText(value)}
                    onContentSizeChange={handleContentSizeChange}
                    numberOfLines={numberOfLines}
                    placeholder="Enter your message..."
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#EAECF0',
        width: '70%',
        maxHeight: 40 * 3,
        minHeight: 40
    }
});

export default MultilineInput;
