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

                        <View style={styles.modalInfoContainer}>
                            <View style={styles.iconContainer}>
                                {imgSource && <Image source={imgSource} style={styles.icon} />}
                            </View>
                            <Text style={styles.infoText}>
                                {title}
                            </Text>
                            {isLoading ? (
                                <View style={styles.loadingContainer}>
                                    <ActivityIndicator
                                        style={styles.activityIndicator}
                                        size="small"
                                        color="#795DEA"
                                    />
                                </View>
                            ) : (
                                <View>
                                    <Text style={styles.infoDetailText}>
                                        {advice}
                                    </Text>
                                    <Text style={styles.authorText}>
                                        - {author} -
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
