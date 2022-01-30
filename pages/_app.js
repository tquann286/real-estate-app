import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
	console.log(Component)
	console.log(pageProps)
	return (
		<React.Fragment>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</React.Fragment>
	)
}

export default MyApp
