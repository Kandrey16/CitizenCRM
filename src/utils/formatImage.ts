import femaleFace from '../assets/female-face.avif'
import maleFace from '../assets/male-face.webp'

export function formatImage(gender: string) {
  return gender === 'MALE' ? maleFace : femaleFace
}
