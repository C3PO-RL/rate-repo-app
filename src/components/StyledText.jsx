import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: { fontWeight: theme.fontWeights.bold },
    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.secondary,
    },
    textAlignCenter: {
        textAlign: 'center',
    }
});

const StyledText = ({ children, color, fontSize, fontWeight, style, align, ...rest }) => {
    const textStyle = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ];

    return (
        <Text style={textStyle} {...rest}>
            {children}
        </Text>
    );
};

export default StyledText;
