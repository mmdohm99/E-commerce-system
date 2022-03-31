import { SimpleGrid } from '@mantine/core';
import { AspectRatio, Image } from '@mantine/core';

function Grid() {
    return (
        <SimpleGrid cols={3} spacing="xs">
            <div>
                <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400 }} mx="auto">
                    <Image
                    src="https://images.samsung.com/is/image/samsung/p6pim/levant/feature/154660992/levant-feature-the-power-of-bubbles-504635602?$FB_TYPE_I_JPG$"
                    alt="Panda"
                    />
                </AspectRatio>
            </div>

            <div>
                <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400 }} mx="auto">
                    <Image
                    src="https://hey-sign-shop.de/media/image/3a/fe/8c/a-HEY-SIGN_Waeschekorb_aus_Filz_DSC2982.jpg"
                    alt="Panda"
                    />
                </AspectRatio>
            </div>
            
            <div>
                <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400, maxHeight: 350 }} mx="auto">
                    <Image
                    src="https://www.rd.com/wp-content/uploads/2022/01/20-best-laundry-baskets-and-hampers-FT.jpg?fit=700,700"
                    alt="Panda"
                    />
                </AspectRatio>
                <br />
                <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400, maxHeight: 190 }} mx="auto">
                    <Image
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wicker-laundry-basket-1624991511.jpg?crop=1.00xw:0.752xh;0,0.231xh&resize=1200:*"
                    alt="Panda"
                    />
                </AspectRatio>
            </div>
        </SimpleGrid>
    )
}

export default Grid;