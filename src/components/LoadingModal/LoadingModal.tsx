import React from 'react';
import { View, Text, Modal, ActivityIndicator, Image } from 'react-native';
import { LoadingModalProps } from '../../interfaces/interfaces';
import styles from './styles';

const LoadingModal = ({
    isVisible,
    isLoading,
    successImageUrl,
    errorImageUrl,
    title,
    subtitle,
    isSuccessful
}: LoadingModalProps) => {

    const textColor = isSuccessful ? styles.infoTextSuccess : styles.infoTextError;
    const imgSource = isSuccessful ? successImageUrl : errorImageUrl;

    return (
        <Modal visible={isVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {isLoading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator
                                style={styles.activityIndicator}
                                size="large"
                                color="#795DEA"
                            />
                        </View>
                    ) : (
                        <View style={styles.modalInfoContainer}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={imgSource}></Image>
                            </View>
                            <Text style={[styles.infoText, textColor]}>
                                {title}
                            </Text>
                            <Text style={styles.infoDetailText}>
                                {subtitle}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default LoadingModal;