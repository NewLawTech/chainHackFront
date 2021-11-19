import React, { useState, useEffect, useMemo } from "react";
import { useMoralis } from "react-moralis";
import {
	Flex,
	Box,
	Spacer,
	Heading,
	Button,
	Stack,
	Input,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/react";

export const NltOpenSea = () => {
const {
		Moralis,
		user,
		logout,
		authenticate,
		enableWeb3,
		isInitialized,
		isAuthenticated,
		isWeb3Enabled,
	} = useMoralis();

const [values, setValues] = useState({ tokenAddress: "", tokenId: "" });

const web3Account = useMemo(
		() => isAuthenticated && user.get("accounts")[0],
		[user, isAuthenticated],
	);

//Get NFT Orders Data from OpenSea and create orders
const getAsset = async () => {
  const res = await Moralis.Plugins.opensea.getAsset({
			network: "testnet",
			tokenAddress: values.tokenAddress,
			tokenId: values.tokenId,
  });
  console.log(res);
};

const getOrder = async () => {
  await Moralis.Plugins.opensea.getOrders({
    network: "testnet",
    tokenAddress: values.tokenAddress,
    tokenId: values.tokenId,
    // orderSide: side,
    page: 1, // pagination shows 20 orders each page
  });
 
};

const createSellOrder = async => {};

const createBuyOrder = async => {};


	useEffect(() => {
		if (isInitialized) {
			Moralis.initPlugins();
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled) {
			enableWeb3();
		}
		// eslint-disable-next-line
	}, [isAuthenticated]);

return (
		<>
			<Flex sx={{ margin: 3 }}>
				<Box p="2">
					<Heading size="md">NewLawTech OpenSea</Heading>
				</Box>
				<Spacer />
			</Flex>
			<Flex sx={{ margin: 3 }}>
				<Box w="45vw" sx={{ mr: 3 }}>
					<Input
						sx={{ borderColor: "1px solid black" }}
						placeholder="NFT Token Address"
						// onChange={(e) =>
						// 	setValues({ ...values, tokenAddress: e.target.value })
						// }
					/>
				</Box>
				<Box w="10vw">
					<NumberInput
						min={0}
						// value={values.tokenId}
						// onChange={(valueString) =>
						// 	setValues({ ...values, tokenId: valueString })
						// }
					>
						<NumberInputField sx={{ borderColor: "1px solid black" }} />
					</NumberInput>
				</Box>
			</Flex>
			<Stack direction="row" spacing={4} sx={{ margin: 3 }}>
				<Button onClick={getAsset}>Get Asset</Button>
				<Button onClick={getOrder}>Get Order</Button>
				{isAuthenticated && (
					<>
						<Button onClick={createBuyOrder}>Create Buy Order</Button>
						<Button onClick={createSellOrder}>Create Sell Order</Button>
					</>
				)}
			</Stack>
		</>
	);

}