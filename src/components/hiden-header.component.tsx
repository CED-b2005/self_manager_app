import { View } from 'react-native';

type HidenHeaderStyles = {
    width?: any;
    height?: any;
    display?: any;
    justifyContent?: any;
    alignItems?: any;
    backgroundColor?: string;
    borderWidth?: any;
    borderRadius?: any;
    borderBlockColor?: string;
}

interface HidenHeaderProps {
    styles?: HidenHeaderStyles;
    children?: any;
}

export const HidenHeader = ({ styles, children }: HidenHeaderProps) => {
    return (
        <View style={{
            width: styles?.width ?? '100%',
            height: styles?.height ?? '55',
            display: styles?.display ?? "flex",
            justifyContent: styles?.justifyContent ?? 'center',
            alignItems: styles?.alignItems ?? 'center',
            backgroundColor: styles?.backgroundColor ?? 'white',
            borderWidth: styles?.borderWidth ?? 0,
            borderRadius: styles?.borderRadius ?? 0,
            borderBlockColor: styles?.borderBlockColor ?? 'back',
        }}>
            {children}
        </View>

    )
}