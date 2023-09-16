import React from 'react';
import { View, Text, Modal, ActivityIndicator, Image, TouchableWithoutFeedback } from 'react-native';
import { LoadingModalProps } from '../../interfaces/interfaces';
import styles from './styles';

export const AdviceModal = ({
    isVisible,
    isLoading,
    title,
    advice,
    author,
    imgSource,
    onClose,
}: LoadingModalProps) => {

    return (
        <Modal visible={isVisible} transparent>
            <TouchableWithoutFeedback onPress={onClose}>
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
                            {imgSource && <Image source={imgSource} style={styles.icon} />}
                            </View>
                            <Text style={styles.infoText}>
                                {title}
                            </Text>
                            <Text style={styles.infoDetailText}>
                                {advice}
                            </Text>
                            <Text style={styles.infoDetailText}>
                                -{author}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
