import {Box} from 'ink';
import React from 'react';

type Props = {
	children: React.JSX.Element | React.JSX.Element[];
};

/**
 * The pane
 */
const Pane = ({children}: Props) => {
	return <Box>{children}</Box>;
};

export default Pane;
