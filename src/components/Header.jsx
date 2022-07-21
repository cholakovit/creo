import { MaterialUISwitch, Test, CreoFormControlLabel } from '../helper/styles'
import { AppBar, Container } from '@mui/material'
import { ColorModeContext } from '../helper/Context'
import { useContext } from "react"

const Header = () => {

    const colorMode = useContext(ColorModeContext)

    return (
        <AppBar>
            <Container>
                <CreoFormControlLabel onClick={colorMode.toggleColorMode} control={<MaterialUISwitch defaultChecked />} />
            </Container>
        </AppBar>
    )
}

export default Header