import { MaterialUISwitch, Test, CreoFormControlLabel, CreoAppBar } from '../helper/styles'
import { Container } from '@mui/material'
import { ColorModeContext } from '../helper/Context'
import { useContext } from "react"

const Header = () => {

    const colorMode = useContext(ColorModeContext)

    return (
        <CreoAppBar>
            <Container>
                <CreoFormControlLabel onClick={colorMode.toggleColorMode} control={<MaterialUISwitch defaultChecked />} />
            </Container>
        </CreoAppBar>
    )
}

export default Header