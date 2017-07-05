	import Vue from 'vue';

	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);

	import { Spinner } from 'mint-ui';

	Vue.component(Spinner.name, Spinner);
