


*** LLM = Large Language Models ***

ChatGPT = Chat Generative Pretrained Transformer


ChatGPT is just some piece of code 

ChatGPT is given too many data on which it is trained 

Like if I ask this reply like this and that so according to that ChatGPT is trained to give responses

So ChatGPT can only answer regarding the data it is trained on so what will happen if we ask something that it doesn't know

Then it searches in Web to find the answer to that






*** How ChatGPT responds ***

So we might think that ChatGPT has all the questions stored in a DB in key value pair

Like if we say "Hi, how are you?" then it will search the DB and will send the value corresponding to that key in response

So this is false as even if we write "hi, hw ar u" it still understands what we are trying to say 

Or even if we make grammatical mistakes then also it understands what we are saying "Hi, how is you?"

So ChatGPT cannot store words sentences in DB in key value pair as there are infinite words sentences, etc so we cannot store all in DB

So there must be some other method by which ChatGPT responds

So here comes our concept of tokenization 




*** Tokenization ***

So whenever we send message to ChatGPT it first converts the message into tokens i.e. it divides the  sentence in small parts


So let's say we messaged "Hi, How are you" so our first token is "Hi" then "How" then "are" then "you" so this process is called as *** tokenization ***

It depends on LLM model how they are making tokens it can be word by word, letter by letter or anything 



*** GPT meaning ***

G == Generative 

As it can generate a new content in response to our query 

So it can generate content

P == Pretrained 

It means that it has been trained on data 

T == Transform 

This is the main element

So first we send message to ChatGPT so it goes to transformer so then it word by words predicts the next word and forms a sentence which is then sended back to the user 

So code to predict word by word is written inside transformer

So if we give "Hi, How are you" as input so it will predict next word then gives output as "Hi, How are you I" then this is given as input so it returns output as "Hi, How are you I am" and by repeating this process again and again it returns the sentence 




So our ChatGPT assigns number to the tokens as at the end our computer only understands binary or can say numbers

So let's say we messaged "Hi, How are you" so "Hi" let's say got token number 45 then "How" is 96 , "are" is 42 and "you" is 12

So these are our 4 tokens [45, 96, 42, 12] 

So this array of tokens is fed to transformer then it generates another token which has highest probability of coming

So let's say "I" is 10 so new token generated is 10 so [45, 96, 42, 12, 10] is then fed to transformer again to generate a reply 

So our tokens won't be infinite here as because of infinite only it broke the sentence in words 

So transformer main goal is to predict the next token and keep in mind that the meaning is not lost 

So we need to give input to our model so that it also gets the context of the message as if we just say "I am" then it cannot just make sense from what is said or what user wants to say as context is not there

So at last the array of tokens is then converted into words and returned to user as a response




So whenever we ask question that is connected to old chat we send old chat as context to ChatGPT so that it can understand what we are trying to say


So what they might have done is they might have stored recent chat in Redis so that ChatGPT can get the context in order to respond to new message


So the number of tokens it takes as input and number of tokens it gives as output is cut from our token count 

To get more token count we need to spend money


So sometimes we see that ChatGPT says to create new window to chat as it cannot read out too many tokens now 

As previous chat is also sent as input along with current query so all these token might not be possible that ChatGPT reads all of it 

Therefore it says to create new window to refresh number of token sent as input

So proper bill will be made for paid version of ChatGPT for each token given in input and given as output both are counted

So now backend part gets important so that no one can just inrease our bill too much we put limits to it then

So here comes our important role of backend that is optimization (to optimize the cost)


Tokenization is also done by some process or some model so for that also need to know AIML




