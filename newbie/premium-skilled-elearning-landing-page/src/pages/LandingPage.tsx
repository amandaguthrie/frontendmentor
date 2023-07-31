import ModernCourseHero from "../components/ModernCourseHero.tsx";
import PopularCourseGrid from "../components/PopularCourseGrid.tsx";
import HeaderBar from "../components/HeaderBar.tsx";
import {Flex} from "@chakra-ui/react";
import FooterBar from "../components/FooterBar.tsx";

function LandingPage() {
    const responsiveBackground = {
        md: `url('image-hero-tablet@2x.png') no-repeat  50vw -92px / 640px 640px transparent`,
        lg: `url('/image-hero-desktop@2x.png') no-repeat 35vw -146.13px / 992px 937px transparent`,
        xl: `url('/image-hero-desktop@2x.png') no-repeat 52vw -146.13px / 992px 937px transparent`
    }
    return (
        <Flex bg={responsiveBackground}
              direction='column'
              alignItems='center'
              width='100vw'
              minHeight='100vh'

        >
            <HeaderBar/>
            <ModernCourseHero/>
            <PopularCourseGrid/>
            <FooterBar/>
        </Flex>
    );
}

export default LandingPage;