import React, { useState } from 'react';
import { ImageBackground, Text, Modal, TouchableOpacity, View, Image } from 'react-native';

const Modalscreen = () => {
    const [modaOpen, setmodaOpen] = useState(false)
    return (
        <ImageBackground source={{ uri: 'https://thumbs.dreamstime.com/b/tile-floor-brick-wall-background-lights-night-hd-image-large-resolution-can-be-used-as-desktop-wallpaper-real-zise-184215885.jpg' }} style={{ flex: 1, padding: 30 }}>

            <TouchableOpacity onPress={() => setmodaOpen(true)} style={{ backgroundColor: 'red', padding: 10, }}>
                <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>Modal Open</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setmodaOpen(true)} style={{ backgroundColor: 'blue', padding: 10, }}>
                <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>Modal Open Two</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modaOpen}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setmodaOpen(!modaOpen);
                }}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "90%", backgroundColor: 'white', padding: 30 }}>
                        <Text>ModalOpenTwo</Text>
                        <Image style={{ height: 100, width: 100 }} source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg' }} />
                        <TouchableOpacity onPress={() => setmodaOpen(!modaOpen)}>
                            <Text style={{fontSize: 22}}>CloseModal</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>
        </ImageBackground>
    );
};

export default Modalscreen;