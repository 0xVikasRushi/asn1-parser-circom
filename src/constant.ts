import { readAndParseDer } from "./cert";

export const SAMPLE_DER_2: number[] = Array.from(readAndParseDer("sig-p256-der-2.txt"));
export const SAMPLE_DER: number[] = Array.from(readAndParseDer("sig-p256-der.txt"));
// ? EACH LINE IS ASN.1 SINGLE IN OUTPUT
// 30 82 04 9F
// 06 09 2A 86 48 86 F7 0D 01 07 02
// A0 82 04 90
// 30 82 04 8C
// 02 01 01
// 31 0D
// 30 0B
// 06 09 60 86 48 01 65 03 04 02 01
// 30 3F
// 06 09 2A 86 48 86 F7 0D 01 07 01
// A0 32 04 30 74 68 69 73 20 69 73 20 64 61 74 61 20 66  72 6F 6D 20 64 61 74 61 2E 74 78 74 20 66 69 6C 65 20 63 72 65 61 74 65 64 20 62 79 20 76 69 6B  61 73
// A0 82 02 4D
// 30 82 02 49
// 30 82 01 EF
// A0 03
// 02 01 02
// 02 14 3A 00 AC 98 A0 3D BF 46 B6 72 7D E9 65 75 E8 94 0C 51 AC BA
// 30 0A
// 06 08 2A 86 48  CE 3D 04 03 02
// 30 7A
// 31 0B
// 30 09
// 06 03 55 04 06
// 13 02 49 4E
// 31 11
// 30 0F
// 06 03 55 04 08
// 0C 08 54 65 6C 61 67 61 6E 61
// 31 12
// 30 10
// 06 03 55 04 07
// 0c 09 48 79 64 65 72 61 62 61 64
