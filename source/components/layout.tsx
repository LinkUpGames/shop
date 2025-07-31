import React from 'react';
import {Box} from 'ink';

/**
 * The props
 */
type Props = {
	children: React.JSX.Element | React.JSX.Element[];
};

/**
 * The main layout
 */
const Layout = ({children}: Props) => {
	return <Box>{children}</Box>;
};

export default Layout;
