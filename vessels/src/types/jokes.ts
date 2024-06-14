export type TextJoke = {
	author: string;
	text: string;
	foo: string;
};

function isTextJoke(joke: Joke): joke is TextJoke {
	const tJoke = joke as TextJoke;
	return tJoke.text !== undefined && tJoke.foo !== undefined;
}

export type PictureJoke = {
	author: string;
	imageRef: string;
	bar: number;
};

export type Joke = TextJoke | PictureJoke;

const compareJoke = (joke: Joke) => {
	if (isTextJoke(joke)) {
		// Should know that it's a text joke
		const test = joke.text;
	} else {
		// Should know that it's a PictureJoke
		const test = joke.imageRef;
	}
};
