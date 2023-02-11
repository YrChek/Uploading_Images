import Blocks from './blocks';
import Events from './events';

const parentEl = document.querySelector('.img-box');
const blocks = new Blocks(parentEl);
const clicks = new Events(parentEl, blocks);
