import { TouchableOpacity, Text, StyleSheet } from "react-native"

type TourchStyles = {
    width?: any
    height?: any
    flex?: any
    backgroundColor?: string
    borderWidth?: any
    borderRadius?: any
    borderBlockColor?: string
    color?: string
    fontWeight?: any
    fontSize?: any
}

interface TouchProps {
    onPress: () => void
    title: string
    tourchStyles?: TourchStyles
}

export const Tourch = ({ onPress, title, tourchStyles }: TouchProps) => {

    const styles = StyleSheet.create({
        tourchStyle: {
            width: tourchStyles?.width ?? " 100%",
            height: tourchStyles?.height ?? 50,
            display: 'flex',
            flex: tourchStyles?.flex ?? 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: tourchStyles?.backgroundColor ?? 'lightblue',
            borderWidth: tourchStyles?.borderWidth ?? 1,
            borderRadius: tourchStyles?.borderRadius ?? 10,
            borderBlockColor: tourchStyles?.borderBlockColor ?? 'back',
        },

        textStyle: {
            color: tourchStyles?.color ?? "black",
            fontWeight: tourchStyles?.fontWeight ?? "bold",
            fontSize: tourchStyles?.fontSize ?? 16,
            margin: 0,
            padding: 0
        }
    });

    return (
        <TouchableOpacity style={styles.tourchStyle} activeOpacity={0.6} onPress={onPress}>
            <Text style={styles.textStyle}>
                {title}
            </Text>
        </TouchableOpacity >
    );
}


