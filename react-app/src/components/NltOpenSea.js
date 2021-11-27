import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
	Flex,
	Box,
	Button,
	Stack,
	Heading,
	Input,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/react";

export const NltOpenSea = () => {
const {
		Moralis,
		enableWeb3,
		isInitialized,
		isAuthenticated,
		isWeb3Enabled,
	} = useMoralis();

const [values, setValues] = useState({ tokenAddress: "", tokenId: "" });
const [isLoading, setIsLoading] = useState(true);
const [nftData, setNftData] =useState([])

	useEffect(() => {
		if (isInitialized) {
			Moralis.initPlugins();
			console.log("Moralis Plugin initialized")
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled) {
			enableWeb3();
			console.log("Moralis Web3 is Enabled")
		}
		// eslint-disable-next-line
	}, [isAuthenticated]);

	//Get NFT Asset Data from OpenSea marketplace
	const getAsset = async () => {
		setIsLoading(false);
		const res = await Moralis.Plugins.opensea.getAsset({
				network: "testnet",
				tokenAddress: values.tokenAddress,
				tokenId: values.tokenId,
		});
		console.log(res);
		setNftData(res);
	};

	const content = isLoading ? <div>Loading...</div> : <div><pre>{JSON.stringify(nftData, null, 2)}</pre></div>

return (
		<>
			<Flex sx={{ margin: 3 }}>
				<Box w="45vw" sx={{ mr: 3 }}>
					<Input
						sx={{ borderColor: "1px solid black" }}
						placeholder="NFT Token Address"
						onChange={(e) =>
							setValues({ ...values, tokenAddress: e.target.value })
						}
					/>
				</Box>
				<Box w="10vw">
					<NumberInput
						min={0}
						value={values.tokenId}
						onChange={(valueString) =>
							setValues({ ...values, tokenId: valueString })
						}
					>
						<NumberInputField sx={{ borderColor: "1px solid black" }} />
					</NumberInput>
				</Box>
			</Flex>
			<Stack direction="row" spacing={4} sx={{ margin: 3 }}>
				<Button onClick={getAsset}>Get Asset</Button>
			</Stack>
			<Heading>{content}</Heading> 
		</>
	);
}