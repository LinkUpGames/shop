import React from 'react';
import {Box, Text} from 'ink';

type Props = {};

/**
 * The content to display
 */
const Content = ({}: Props) => {
	return (
		<Box width={'100%'} borderStyle="single">
			<Text>I'm the content area</Text>
		</Box>
	);
};

export default Content;
