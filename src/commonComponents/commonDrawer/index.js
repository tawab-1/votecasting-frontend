import {StyledCommonDrawer} from "./style";

export const CommonDrawer = ({children, ...others}) => {
    return (
        <StyledCommonDrawer {...others}>
            {children}
        </StyledCommonDrawer>
    )
}
