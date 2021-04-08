const animItems = document.querySelectorAll('.anim');
function addAnim() {
	for (let index = 0; index < animItems.length; index++) {
		const animItem = animItems[index];
		animItem.classList.add('active');
	}
}
setTimeout(addAnim, 1000);