import { Image } from 'react-native'
import PersonBackground from "../assets/person-background-image.jpeg"
import styles from "../constants/style"

export default function TopArea() {
    return (
        <Image style={styles.topImage} source={PersonBackground} />
    )
}