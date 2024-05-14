import { Images } from '@/assets';
import { DiscussionScreen } from '@/screens/Discussion/DiscussionScreen';
import DealDigestNavigator from './DealDigestNavigator';
import TransactionNavigator from './TransactionNavigator';
import { AssetsListScreen, HomeScreen } from '@/screens';
import { AssetsTabNavigator } from '@/navigation/AssetsTabNavigator';


const TabNavigationData = [
	{
		name: 'Home',
		component: HomeScreen, // Will add respective component when designed
		icon: Images.homeIcon,
	},
	{
		name: 'Assets',
		component: AssetsTabNavigator, // Will add respective component when designed
		icon: Images.assetsIcon,
	},
	{
		name: 'Discussion',
		component: DiscussionScreen,
		icon: Images.discussionIcon,
	},
	{
		name: 'Transactions',
		component: TransactionNavigator, // Will add respective component when designed
		icon: Images.transactionIcon,
	},
	{
		name: 'DealDigest',
		component: DealDigestNavigator, // Will add respective component when designed
		icon: Images.dealIcon,
	},
];

export default TabNavigationData;
