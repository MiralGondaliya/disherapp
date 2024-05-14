import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Animated, PanResponder, TouchableOpacity } from 'react-native';


const CARD_WIDTH = 300;
const CARD_HEIGHT = 400;
const SWIPE_THRESHOLD = 120;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'lightgray',
		position: 'absolute',
	},
});

interface CardProps {
	title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event(
				[
					null,
					{ dx: pan.x, dy: pan.y },
				],
				{ useNativeDriver: false },
			),
			onPanResponderRelease: (e, gestureState) => {
				if (gestureState.dx > SWIPE_THRESHOLD) {
					swipeRight();
				} else if (gestureState.dx < -SWIPE_THRESHOLD) {
					swipeLeft();
				} else {
					resetPosition();
				}
			},
		}),
	).current;

	const swipeLeft = () => {
		Animated.timing(pan, {
			toValue: { x: -CARD_WIDTH * 2, y: 0 },
			duration: 300,
			useNativeDriver: false,
		}).start(advanceCard);
	};

	const swipeRight = () => {
		Animated.timing(pan, {
			toValue: { x: CARD_WIDTH * 2, y: 0 },
			duration: 300,
			useNativeDriver: false,
		}).start(advanceCard);
	};

	const resetPosition = () => {
		Animated.spring(pan, {
			toValue: { x: 0, y: 0 },
			useNativeDriver: false,
		}).start();
	};

	const advanceCard = () => {
		// Remove this card from the list and go to the next card
		// You should handle the list of cards in your parent component
	};

	const animatedCardStyles = {
		transform: [
			{ translateX: pan.x },
			{ translateY: pan.y },
		],
	};

	return (
		<Animated.View
			style={[styles.card, animatedCardStyles]}
			{...panResponder.panHandlers}
		>
			<Text>{title}</Text>
		</Animated.View>
	);
};

export const SwiperScreen: React.FC = () => {
	const [cards, setCards] = useState(['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5']);

	return (
		<View style={styles.container}>
			{cards.map((title, index) => (
				<Card key={index} title={title} />
			))}
		</View>
	);
};

