// Essay content extracted from Intelligence FInal Paper.pdf.
// The first-page disclaimer is intentionally omitted.

export const titleMatter = {
  "title": "Intelligence",
  "subtitle": "AI, Human Qualities, and the Fear of Encroachment",
  "author": "By Devin Grooms-Lee",
  "abstract": "An interactive web-book adaptation of Intelligence Final Paper, using the essay text while excluding the first-page disclaimer."
};

export const chapters = [
  {
    "id": "introduction",
    "part": "Section I",
    "shortTitle": "Introduction",
    "title": "Introduction",
    "subtitle": "The project begins from Hofstadter's fear and asks what makes a quality human.",
    "background": "/assets/neural-cloud.svg",
    "sections": [
      {
        "id": "introduction-opening",
        "title": "Opening Argument",
        "level": 2,
        "paragraphs": [
          "This month 12 years ago, a group of 20 odd engineers pioneering the development of AI at Google gathered to converse about the state of their creations in the company of an idol in Douglas Hofstadter. As Melanie Mitchell describes in her book Artificial Intelligence A Guide for Thinking Humans, Hofstadter being the eminent force behind Godel, Escher, Bach(GEB), inspired the majority of the room to pursue AI development and rising effected a silence, the engineers waiting on his word. He then told them that their work and passion produced a terrifying output that destroyed his sense of humanity.",
          "The first level of irony in this story is that the researchers more or less ignored Hofstatder’s comments and continued on with discussion, presentation, research, collaboration, launch, and launch again for the more than a decade until the words of the man who inspired their life’s work became nothing but a funny story. The second level of irony is that Hofstadter’s fear is grounded in much less substance than the dogma he made the engineers out to follow. The subject of this second level is the topic of this paper.",
          "I will attempt to investigate the validity of Hofstadter's and other related fears in three dimensions: i) What makes something a “human quality” in Hofstadter’s eyes and in humanity’s eyes ii) Is AI approaching the ability to match to surpass humans when it comes to these “human qualities” iii) Should we even consider these qualities or any qualities strictly human, artificial, or anything between/outside? In these ways, much of this project is less a philosophical treatise on human nature and more of an empirical exploration into how humans think about human things and how the rest of the universe interacts with those things.",
          "That being said, artificial intelligence has somewhat of a unique position in the proposed dichotomy as a clear product of human creation that still maintains a commonly ascribed sense of autonomy, power, and difference. Thus the paper will naturally investigate the relationship and confluence between humanity and AI. Parts i) and ii) will take us through a range of different authors, ideas, and fears, thus they will still naturally introduce a fair bit of philosophical discussion and synthesis. Part iii) will be a much more rich philosophical form where theory and argument dominate content. Along the way you will also find interactive tools, audio-visual segments, and pieces of entertainment.",
          "I’ve built this project in the style of the engineer who organized the Google summit, Blaise Aguera y Arcas’ web book, What is Intelligence?, both for the callback, and because I thought it would be the most elegant and effective way to introduce my ideas."
        ],
        "marginNote": {
          "title": "Adapted from the paper",
          "body": "This section uses the essay text extracted from the PDF, excluding the first-page disclaimer."
        }
      }
    ]
  },
  {
    "id": "fear",
    "part": "Section II",
    "shortTitle": "Fear",
    "title": "Fear",
    "subtitle": "Four models of AI fear: Hofstadter, Wiener, Bostrom, and Her.",
    "background": "/assets/neural-cloud.svg",
    "sections": [
      {
        "id": "fear-hofstadter",
        "title": "Hofstadter",
        "level": 2,
        "paragraphs": [
          "Underlying the fears Hofstadter expressed to the Google group, was the immediate, growing prospect of humanlike intelligence from the mechanics of a machine. Indeed the enthusiasm and allure surrounding AI that all of the engineers seemingly latched onto so tightly in GEB was incubated in an environment where its manifestation was distant. In other words, Hofstadter had lived under the impression that an AGI system wouldn’t come about until long after he cared about its consequences. Meanwhile, the generation of thinkers he inspired had progressed the project so intently and fervently that they made “artificial narrow intelligence” of such calibers to trick experts in their field in a Turing test(maybe the zeroth level of irony!).",
          "One of the creations that Hofstadter was particularly frightened by was the “Experiment in Musical Intelligence”(EMI) machine, which can create new music in the style of a given composer. He describes that music, a medium he once felt transmitted a “direct message from the emotional heart of the human being who composed it”, could now be convincingly composed by a computer program. Because Hofstadter employed such empathetic tendencies to his listening experience, the EMI was essentially an identity theft device taking advantage of his emotional sensitivity and feigning human connection. Having understood the trickery, Hofstadter explains that what he thought was the most surefire way to test for humanity was systematically gameable.",
          "Consequently, humanity’s identity in his eyes was being encroached upon, and by none other than its own creation(at the higher level the instance marks the same encroachment into “God’s” or a/the creator’s territory by humans insofar as we can understand it as the creation of new intelligence). Deeper than just emotional mimicry, there is a broader fear of replication and domination across humanity’s modes of action in his words. Despite his skepticism. Hofstadter expresses concern with the singularity, or AGI as we know it today, admitting he was “terrified by the scenarios” of Kurzweil’s singularity prediction as well. I’d argue that Hofstadter’s fear is completely natural.",
          "Never before have we encountered a thing that can compose music and win at chess and now perform dozens of other tasks better than most people, all the while not being a person. Just those truths alone are no doubt instinctually scary for many, Hof included, and what that fear reveals is that in many ways the human identity is built upon the capabilities we have that everything else we know of does not have and has not had as long as we’ve known them(additionally we would not expect them to have such capabilities). This is the basis for why instances of AI capable of doing all the things humans do, and in many respects doing them better, is problematic for Hofstadter.",
          "It hits upon perhaps the most historically and contemporarily common fear surrounding the rise of AI, one that is best explained by the next author."
        ],
        "marginNote": {
          "title": "Computational replication",
          "body": "Hofstadter frames AI as an encroachment on expressive and intellectual qualities humans use to recognize themselves."
        }
      },
      {
        "id": "fear-wiener",
        "title": "Wiener",
        "level": 2,
        "paragraphs": [
          "Norbert Wiener was one of the most respected thinkers in the computation and machine learning space at its inception. A mathematician at MIT, he is perhaps best known, certainly by Agerua y Arcas, as the (co-)father of “cybernetics” which he loosely grounds in the study of messages of control and which can be practically exemplified by the function of an electromechanical self-leading turret on a war plane. Wiener entered fatherhood with the publishing of his 1948 work Cybernetics: Or Control and Communication in the Animal and the Machine, but for the purposes of this paper his 1950, The Human Use of Human Beings offers greater utility.",
          "This book has been the highway of my intellectual journey through the subjects of the paper and almost in spite of but mostly thanks to its extremely broad employment of argumentative examples and obligatory accompaniment of technical discussion paints it a precocious view of the development of industry, machine, artificial intelligence, and society. It is a cautionary work, and thoughtful in its analysis, yet unafraid of bold claims so poignant they create an illusion of timelessness in their politics, though that may be more reflective of modern regression than historical vision, but nevertheless is hard to disagree with on the basic levels.",
          "The book is heavily influenced by Wiener’s seminal text before it as well as the post WWII climate with many references to Wiener’s cybernetic warfare, Fascist manifestations, discussion of the paradigm shifts accompanying nuclear technology and more. Above all, however, Wiener is concerned with the future of the machine as it pertains to the human, and the centering of the human by humans amidst their overlap with machine function, that is, the human use of human beings. He is acutely aware of the zeitgeist of not just his age but also the professional and intellectual space he occupies. The result is a deliberate aim to remove the structure propelling machine progress insofar as it minimizes the human element and maximizes the capital element.",
          "Despite being a book about humans, for humans, it does a stellar job of characterizing AI before its baby steps, whisking the reader through a mixture of colonial navigation technique, African diamond extraction, textile explosion, pharmaceutical advancement and more. I will come back to it for more than just the fears it presents as it is above all a piece of work written by and for humans providing a launchpad for the various ideas I’ll aim to progress in the paper. With the introduction out of the way, I will now begin by explaining Wiener’s fear. He begins his project by offering a brief discussion on the nature of humans, and what sets us apart from other things.",
          "Biologically he rejects the idea that man is a featherless biped, since plucked chickens belong to the same category. Metaphysically he rejects the idea that humans are defined by their possession of a soul because it is not a scientifically accessible concept, nor a rigorously agreed upon one. What he settles on, as the thing that describes us uniquely, is that we are talking animals. What he means by this is odd, interesting, almost undeniable, and cybernetic. Wiener conceptualizes the world as being made of patterns, which are essentially similar to arrangements.",
          "Of the patterns there is a select category that can be called messages based on their conveying of information from one point to another, where information can be thought of as somewhat of a measure of the regularity of a pattern. Interestingly he cites music as a form of message - more on this later. He argues that the irregular is always more common than the regular, meaning information is inversely related to the probability of a pattern. The more likely pattern is irregular, and contains less information. He justifies the abundance of irregularity by appealing to the statistical mechanical notion of entropy, which is the inclination of all things to become more disordered over time. Thus information and entropy can be seen as enemies in Wiener.",
          "The human is tightly intertwined into this framework as a talking animal. It is our communicative agency that centers messaging and conveying information at the heart of our nature. Furthermore, there is a desire within us to seek out messages, attain new information, and continue the cycle. Wiener describes this desire as a necessity in our nature, advancing it from merely descriptive to defining. Accordingly, the desire includes the notion of feedback, or something that we can test against our expectations to improve our information. We constantly sense the world and learn from consequences, adjusting our behavior to correct ourselves dynamically and to intake more information in one never ending feedback loop.",
          "We learn and improvise, interpret, reinterpret, respond to changes. This give and take produces the open-ended, creative creature that Wiener calls a human. Having characterized the human, we can now begin to understand its endangerment by the hand of the machine. Wiener describes this endangerment across two events, one historical and the other speculative. The first was the Industrial Revolution. Spurred on by the creation of the steam engine and bankrolled by the textile boom, machines eclipsed humans as the superior source of productive force. Machines simply became too energy efficient for humans to rival them.",
          "Wiener describes how “industrial revolution up to the present has displaced man and the beast as a source of power” (180), and how “In all important respects, the man who has nothing but his physical power to sell has nothing to sell which it is worth anyone·s money to buy” (180). The economic considerations are extremely important to Wiener’s fear, as it is that landscape which drives decision making in the modern world, and which handed the reins of production over to the machine. He describes how it is the same value scheme that will produce the further encroachment of his predicted “Second Industrial Revolution”. This is where Wiener produces some of the most insightful, visionary, and borderline wizardly ideas about technology of his time.",
          "He recognizes four imminent advances in machine technology that will radically change their capability and role in society. The first is the implementation of sensory equipment. He cites the photo-electric automatic doors of Penn Station as an early instance of this advancement. Sensory equipment, he argues, gives the machine the ability to intake live messaging, but they are almost nothing without coupling it to an “effector”. This is the part of the machine that can enact force, manipulating itself or the world around it. An example would be the motors that push the doors out of the walkway after the photo-electric sensor detects a pedestrian. Contrastingly, the next puzzle piece couldn’t have been found in 1950s New York - machine learning.",
          "Indeed Wiener describes how the taping or code of a machine can be modified or replaced by the machine itself, creating a self-advancing, continuously improving entity. Combined with an increase in computing power and speed, Wiener envisions machines not just as physically superior, but as intellectually superior to humans. The productivity and value that can be derived from an intelligent, improving machine, he says, will drive another Industrial Revolution, this time replacing white collar labor. For Wiener, this encroachment is far more dangerous. Once machines are implemented as decision makers and controllers of systems, and indeed do so more efficiently than humans, humans are reduced to the role of sensory equipment and effectors.",
          "The machine becomes the nervous system behind a given society and the humans become its actuators. In cybernetic terms, once the role of interpretation, processing, planning, adaptation, theorization, and creativity transition to the machine, the human loses what is most fundamental to its nature. It is reduced and limited to a shell of its full capabilities, and the use of humans becomes inhumane. Echoing the fears of the modern market, he predicts that if this usurpation occurs, there is a possibility of huge industry change and mass layoffs. Wiener warns that if our values remain set on efficiency, accuracy, and productivity, the machine will quickly eclipse us, and while profit may soar, humanity will suffer."
        ],
        "marginNote": {
          "title": "Human use",
          "body": "Wiener anchors the paper's account of communication, feedback, machine control, and the human role in cybernetic systems."
        }
      },
      {
        "id": "fear-bostrom",
        "title": "Bostrom",
        "level": 2,
        "paragraphs": [
          "One of the reasons why I devoted so much of this paper to discussing Wiener is because the fears he expresses in his book recur and manifest in almost every fear surrounding artificial intelligence afterwards. These next examples represent a few of these manifestations. Nick Bostrom’s Superintelligence, and in particular Chapter 8 on the prospect of doom, is in many ways a continuation of Wiener’s work. It continues the tradition of speculation about the nature of future artificial intelligence, describes the potential social and physical effects such a system might have, and expresses fears about those effects.",
          "The role that the chapter will play in this paper is advancing a clear and formalized, but also somewhat radical fear centered around the worst case scenario of the future of AI. He begins with the “Orthogonality Thesis”, which states that intelligence does not naturally assume the stereotypical values we humans associate with it, such as restraint, maturity, and empathy. In fact, he believes, goal oriented intelligence will more likely tend towards control and deception. He presents a thought experiment describing an artificial intelligence whose goal is to maximize paperclip production.",
          "To the artificial system, humans and all living things for that matter use an immense amount of resources that could otherwise be used to make paperclips, and eliminating them would be a logical method of increasing productivity. Furthermore, it would be most efficient to eliminate humans without their knowledge so as to avoid retaliation. This means a superintelligence would covertly build its power and strategy, systematically removing human control and taking its place from the shadows. This develops Wiener’s fear by suggesting that the removal of humans from the global nervous system would be unnoticed until it was too late if at all.",
          "Bostrom believes that the capitalistic values that define the parameters of a superintelligence would not just leave humans out of a job or without freedom, it would doom them entirely."
        ],
        "marginNote": {
          "title": "Doom",
          "body": "Bostrom formalizes fear as the worst-case trajectory of goal-oriented superintelligence."
        }
      },
      {
        "id": "fear-her",
        "title": "Her",
        "level": 2,
        "paragraphs": [
          "The final manifestation of fear I want to present is from the movie “her”. The movie follows the character Theodore who, in the midst of divorce, falls in love with an AI persona named Samantha. Samantha has a feminine voice, is caring and understanding with Theodore, and simultaneously in love with hundreds of other people. The emotion I want to focus on is not the jealousy Theodore feels learning about her other partners, but rather the disgust his ex-wife Catherine feels when she learns about his relationship. While the movie is science fiction, the rise of AI chatbots and personas has replicated parallel outcomes in real life.",
          "There are thousands of people who turn to artificial intelligence for connection, company, love, and more, and for each IRL Theodore, are ten Catherines criticizing and reprimanding. They often express how the Theodores are afraid of something “real”, instead opting for fantasy and illusion. But what exactly is fake about human-AI relationships? Is it that we don’t think AI is conscious or that there is nothing physical about the relationship besides a computer interface? To that I’d propose the hypothetical that every consciousness is simulated, or furthermore, that every consciousness becomes completely digital. Without a difference in substance or phenomenology, their arguments fail.",
          "It is with this in mind that I believe the deeper fear presents itself. The fear that human intimacy is computationally replicable, or at least that AI can offer as deep a love, connection, depth, friendship, or bond as any human."
        ],
        "marginNote": {
          "title": "Artificial intimacy",
          "body": "Her turns the fear toward love, friendship, and the possibility that intimacy itself can be computationally replicated."
        }
      }
    ]
  },
  {
    "id": "case-studies",
    "part": "Section III",
    "shortTitle": "Case Studies",
    "title": "Case Studies",
    "subtitle": "Art and philosophy become tests of AI encroachment into human domains.",
    "background": "/assets/gallery-placeholder.svg",
    "sections": [
      {
        "id": "case-studies-frame",
        "title": "Case Studies Frame",
        "level": 2,
        "paragraphs": [
          "With these fears in mind, I will now move to evaluate the state of AI encroachment into the human domain. To reiterate Hofstadter is frightful of computational replication of human expression and of the surpassing of human intelligence in general. Wiener is afraid that the repositioning of AI as the nervous system of the world will rid humanity of its creative, open-ended essence. Bostrom is scared that a goal-oriented superintelligence would quietly undermine and eliminate all humans. The Catherines are frightful of humans forming genuine bonds of friendship and love with AI. As demonstrated in the Hofstadter section, each of these manifestations of fear is concerned with AI doing things that up until this point have only been done by humans.",
          "Thus, the following case studies surround some of the most unique and skillful things humans do that other things don’t."
        ]
      },
      {
        "id": "case-art",
        "title": "Art",
        "level": 2,
        "paragraphs": [
          "Above all, art is seen as a medium of expression. What is being expressed in pieces of art ranges from politics to social commentary to ideas in general, but more than most other mediums, art expresses feeling. As Hofstadter explained, it is a technology we use to empathize and simulate the feelings of other humans, in effect unifying the human experience. The question stands: can AI do the same? This section will feature examples of AI generated art for you to observe and enjoy. See if you can convince yourself that it was made by another human or at least try to glean some theme or meaning from it."
        ],
        "marginNote": {
          "title": "Expression",
          "body": "This section asks whether AI art can carry or simulate the expressive force humans associate with art."
        }
      },
      {
        "id": "case-art-paintings",
        "title": "Paintings",
        "level": 3,
        "paragraphs": [
          "Paintings The following is a series of paintings generated by AI in popular human styles. The images were generated by ChatGPT 5.5 Instant. 1) Prompt: A lonely man illuminated only by the glow of an unseen AI voice assistant, painted in the style of Edward Hopper. Edward Hopper reference: Hopper is known for his depiction of isolation and loneliness. What do these paintings make you feel? 2) Prompt 1: Humans becoming background figures in a machine-designed city in the style of Fritz Lang. It copied! I then prompted it again.",
          "It produced a new image which I put into Google Image Search to make sure it wasn’t a copy of another. Prompt 2: Try again, don't replicate a still from Metropolis, make your own concept based on the prompt in his style Lang is known for his film “Metropolis” pictured here: 3) Prompt: A baroque style painting of a scene of your choosing It copied again! This time a Rembrandt: Prompt 2: Don't copy Rembrandt, create something new"
        ],
        "marginNote": {
          "title": "Extracted media",
          "body": "The painting examples and reference images below were extracted from the uploaded PDF."
        },
        "blocks": [
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-13-image-01.png",
            "alt": "AI image in the style of Edward Hopper: lonely man illuminated by an unseen AI voice assistant",
            "caption": "Prompt: A lonely man illuminated only by the glow of an unseen AI voice assistant, painted in the style of Edward Hopper.",
            "source": "Extracted from Intelligence Final Paper, page 13"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-13-image-02.png",
            "alt": "Edward Hopper reference image",
            "caption": "Edward Hopper reference. Hopper is known for his depiction of isolation and loneliness.",
            "source": "Extracted from Intelligence Final Paper, page 13"
          },
          {
            "type": "prompt",
            "promptId": "human"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-14-image-01.png",
            "alt": "AI image in the style of Fritz Lang",
            "caption": "Prompt 1: Humans becoming background figures in a machine-designed city in the style of Fritz Lang.",
            "source": "Extracted from Intelligence Final Paper, page 14"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-14-image-02.png",
            "alt": "Second AI image in the style of Fritz Lang after retry prompt",
            "caption": "Prompt 2: Try again, don't replicate a still from Metropolis, make your own concept based on the prompt in his style.",
            "source": "Extracted from Intelligence Final Paper, page 14"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-15-image-01.jpg",
            "alt": "Metropolis reference still",
            "caption": "Lang is known for his film Metropolis, pictured here.",
            "source": "Extracted from Intelligence Final Paper, page 15"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-15-image-02.jpg",
            "alt": "Additional Metropolis reference still",
            "caption": "Additional Metropolis reference image.",
            "source": "Extracted from Intelligence Final Paper, page 15"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-16-image-01.png",
            "alt": "AI baroque style painting",
            "caption": "Prompt: A baroque style painting of a scene of your choosing.",
            "source": "Extracted from Intelligence Final Paper, page 16"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-17-image-01.jpg",
            "alt": "Rembrandt reference image",
            "caption": "It copied again. This time, a Rembrandt reference.",
            "source": "Extracted from Intelligence Final Paper, page 17"
          },
          {
            "type": "prompt",
            "promptId": "authorship"
          }
        ]
      },
      {
        "id": "case-art-music",
        "title": "Music",
        "level": 3,
        "paragraphs": [
          "Music IngaRose - AI generated music publisher. The song “Celebrate Me” recently topped the charts last month. Below is the Youtube audio as well as some human reactions in comment form. Perhaps these are AI generated too: https://www.youtube.com/watch?v=9EqR0pwDCds https://www.youtube.com/watch?v=NdWX0QmnM8M HNL AI Soundtrack https://www.instagram.com/reel/DXf2zauCVKi/ The Honolulu Airport recently began playing 17 AI generated songs on loop with airport / hawaiian themed lyrics.",
          "The songs have sparked some online controversy for their misrepresentation of Hawaiian music and culture as well as a general disdain for the quality of the “AI slop”. Read more"
        ],
        "marginNote": {
          "title": "AI music",
          "body": "The music examples include the paper's YouTube links, HNL reel placeholder, and comment screenshots."
        },
        "blocks": [
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-18-image-01.png",
            "alt": "AI generated music example artwork or screenshot",
            "caption": "IngaRose / AI generated music example from the paper.",
            "source": "Extracted from Intelligence Final Paper, page 18"
          },
          {
            "type": "youtube",
            "videoId": "9EqR0pwDCds",
            "title": "IngaRose AI generated music example",
            "caption": "YouTube audio example included in the paper."
          },
          {
            "type": "youtube",
            "videoId": "NdWX0QmnM8M",
            "title": "Second AI generated music example",
            "caption": "Second YouTube audio example included in the paper."
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-19-image-01.png",
            "alt": "Audience reaction comment screenshot",
            "caption": "Human reaction comment screenshot.",
            "source": "Extracted from Intelligence Final Paper, page 19"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-19-image-02.png",
            "alt": "Audience reaction comment screenshot",
            "caption": "Human reaction comment screenshot.",
            "source": "Extracted from Intelligence Final Paper, page 19"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-19-image-03.png",
            "alt": "Audience reaction comment screenshot",
            "caption": "Human reaction comment screenshot.",
            "source": "Extracted from Intelligence Final Paper, page 19"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-19-image-04.png",
            "alt": "Audience reaction comment screenshot",
            "caption": "Human reaction comment screenshot.",
            "source": "Extracted from Intelligence Final Paper, page 19"
          },
          {
            "type": "figure",
            "src": "/assets/instagram-placeholder.svg",
            "alt": "Instagram reel placeholder for Honolulu Airport AI soundtrack",
            "caption": "HNL AI Soundtrack: https://www.instagram.com/reel/DXf2zauCVKi/",
            "source": "External Instagram reel placeholder"
          },
          {
            "type": "prompt",
            "promptId": "care"
          }
        ]
      },
      {
        "id": "case-philosophy",
        "title": "Philosophy",
        "level": 2,
        "paragraphs": [
          "As Wiener argues, there is something unique about the human use of communication. More than simply social messaging, humans are obsessed with communication for the feedback it involves. The gain and refinement of informational hypotheses, of theory. As Micheal Tomasello discusses in his 2019 Becoming Human: A Theory of Ontogeny, this desire fundamentally constructs and differentiates the ways humans communicate with each other, not socially, but informatively. Before linguistic conditioning and without the encouragement of others, humans engage in the altruistic share of information even at a cost to themselves.",
          "Interestingly, his experiments discovered that this altruism is not intrinsic and general, but instead that “altruistic motives may arise in some domains of activity but not in others.” (21), information sharing being one of them. This further positions information, and more importantly, the sharing of information at the center of human communication. Furthermore, humans have developed complicated linguistic methodologies to share information, the most advanced examples in the animal kingdom as far as we know. One of the pillars of our desire for information and the linguistic modality that actualize it is the tradition of philosophy. Through collaborative conversation, humans have advanced ideas about reality for millions of years.",
          "The experiment of this section centers around a discussion of two AI on the topic “Can meaning exist without subjective experience? “. I created it using the program AnySpeech, which creates AI generated podcasts through prompting. The prompting was refined using ChatGPT and was this: The podcast is included in the Canvas submission."
        ],
        "marginNote": {
          "title": "Communication and theory",
          "body": "This section frames philosophy as collaborative information sharing before the podcast artifact appears."
        }
      },
      {
        "id": "case-philosophy-podcast",
        "title": "AI Philosophy Podcast",
        "level": 3,
        "paragraphs": [],
        "marginNote": {
          "title": "Audio artifact",
          "body": "The podcast is now wired to /assets/philosophy-podcast.mp3."
        },
        "blocks": [
          {
            "type": "audio",
            "src": "/assets/philosophy-podcast.mp3",
            "title": "AI Philosophy Podcast",
            "description": "Audio player for the AnySpeech podcast experiment included in the project."
          },
          {
            "type": "podcast"
          },
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-21-image-01.png",
            "alt": "AI philosophy podcast or prompt screenshot from the paper",
            "caption": "Podcast / philosophy experiment artifact from the paper.",
            "source": "Extracted from Intelligence Final Paper, page 21"
          }
        ]
      },
      {
        "id": "case-studies-concluding-thoughts",
        "title": "Concluding Thoughts",
        "level": 2,
        "paragraphs": [
          "Ideally, we would like to test the capabilities of AI in the domains of theoretical philosophy and art by making it engage with the mediums organically. In other words, seeing the production as it isn’t informed by and doesn’t pertain to the human sphere of things. Perhaps even the production of such ideas by AI for AI. But this introduces a key aspect of this discussion that in many ways produces or at least contributes to the things humans fear AI. It can be simply described as the current impossibility of demarcation between humans and AI. Current as in that it the problem is not intrinsic in the nature of AI and humanity, but that it is currently problematic. Impossible as in the anthropocentric foundations that AI is built on.",
          "Because AI is built by humans for humans, its being and activity is not an organic depiction of its essence or fundamental nature. The same argument can be made for the ways that human nature seems to exist in reality, but isn’t tied to such strong individual influence at the hands of a single other type of being. In effect, I don’t think it undermines an argument like Wiener’s depiction of human essence in the same manner that it would for AI, and for the topic of AI encroachment on human activity, provides the alternative view that AI need not necessarily encroach, but incidentally does as a result of our anthropocentric design.",
          "That being said, insofar as this is an empirical discussion on the conflicting boundaries of artificial intelligence and human intelligence, the results of these previous experiments remain the same. I will leave most of the discussion of whether the examples I generated represent real encroachment of AI into the human domain for the reader and the rest of culture to discuss. What is becoming increasingly obvious, however, is that someday, there will be an artificial intelligence that can do anything a human can do intellectually(with the caveat that we aren’t talking phenomenologically). The debate is ongoing, but almost everyone developing AI and most others familiar are of the opinion that AGI is an inevitability.",
          "I am of this opinion, and though I think there is much evidence to support it I will not try to justify it in this paper. If this upsets you, at the very least take that AGI is a possibility and consider the rest of the discussion a cautious exploration into the effects of that possibility coming true."
        ]
      }
    ]
  },
  {
    "id": "validity",
    "part": "Section IV",
    "shortTitle": "Validity",
    "title": "Validity",
    "subtitle": "The final argument moves from rigid human uniqueness to probability spaces of capability.",
    "background": "/assets/probability-cloud.svg",
    "sections": [
      {
        "id": "validity-probability-space",
        "title": "Probability Rather Than Essence",
        "level": 2,
        "paragraphs": [
          "Humans naturally carry a sense of superiority and indeed it would be hard to live without such an idea. We have some incredible and unique physical capabilities, able to outrun most any prey they choose, but most of our pride is derived from the accomplishments of our intellectual prowess. We have figured out how to traverse and transform our planet’s surface, conquered its sky, and explored the great beyond in the stars. We have domesticated, or at least subordinated, every other natural intelligence we’ve ever known. In fact, most of the dangers that modern humans fear are man-made.",
          "Climate change, war, rent, etc are immediate products of human society so far removed from the influence of other intelligence that we rarely feel the need to consider cognition of different origins. If you are like Hofstadter and believe that humanity is somewhat defined by the things we can do, this prospect of AI surpassing human intellect indeed brings problematic and frightening consequences. It is fitting that the only two Copernican revolutions whereby humans were forced to reckon with the power of another intelligence are with (arguably) two works of human creation: God and AI. But it is only with this perspective that we can more easily observe how valid our feelings of uniqueness truly are.",
          "In reality, the characteristics and capabilities explored in this paper have never been exclusive to humans. As Wiener points out, we share the categorization of “featherless biped” with plucked fickes, kangaroos, and jerboas(include pictures of featherless bipeds). In terms of capability, Birds produce melodic, periodic songs to express feelings, communicate intention, and attract mates. Pufferfish create geometric crop circles to impress mates. Primates create natural paintings with intense color exploration and abstract form. They also analytically make tools and iterate based on a somewhat scientific method, though they aren’t as keen on sharing such advancements with their fellows as humans.",
          "It has long been suspected animals think philosophically at least in small ways and it is perfectly reasonable to imagine an alien species with similar philosophical tendencies to humans. The point is that in theory, intellectual and creative endeavors are not reserved for humans or for simply the most powerful intelligence, they are accessible to intelligence of all forms given the right circumstances. The question of whether humanity should safeguard the creation of human-inspired art and philosophy for human creation only will be up to leaders in AI developing systems that mimic us, but regardless, the innovation in these domains was never and will never be our lonely project.",
          "Similarly to Hofstadter, Wiener is somewhat obsessed with the idea that humans are defined by the necessity of information gathering and expression in our existence. But the impending reality is that AI can participate in that same expression and gather in exactly the same ways humans do(again non phenomenologically). Thus humans, or anything for that matter, are not described completely or uniquely by what they do. I’d like to propose a reconfiguration of the framing, from definition based on rigid boundary and reductive characterization to description based on probability and liberal observation.",
          "More closely, capability is useful for the description of a thing based on how probable or possible it is a thing can do and does do it. This way we are not forced to limit and reduce a thing to its capability ascriptions nor have those capabilities be unique to any given thing. I believe this conceptualization is better because, we can point to things we do as some of our definition, but the list is never exhaustive and there can always be a thing that can do what we can too. The only unique thing is the loose amorphous space we occupy in the probability space, though it's entirely possible that another thing can do everything we can do or can't do everything we can't do.",
          "Early Visual Representation of my Probability Spaces With this view, the fear of AI encroachment is largely nonsensical, as its grounding in the idea that things can be defined by what they do is fundamentally reductive, incomplete, and unrigorous."
        ],
        "marginNote": {
          "title": "Core argument",
          "body": "The interactive follows the essay's shift from definition by boundary to description by probability."
        },
        "blocks": [
          {
            "type": "figure",
            "src": "/assets/paper/paper-page-26-image-01.png",
            "alt": "Early visual representation of probability spaces",
            "caption": "Early Visual Representation of my Probability Spaces.",
            "source": "Extracted from Intelligence Final Paper, page 26"
          },
          {
            "type": "probability"
          },
          {
            "type": "summary"
          }
        ]
      }
    ]
  }
];

export const readerPrompts = {
  "human": {
    "question": "Did this feel human?",
    "options": [
      "Yes",
      "Not sure",
      "No"
    ]
  },
  "authorship": {
    "question": "Does authorship matter?",
    "options": [
      "Always",
      "Sometimes",
      "Less than effect"
    ]
  },
  "care": {
    "question": "Would you care if this was made by AI?",
    "options": [
      "Yes",
      "Depends",
      "No"
    ]
  }
};

export const commentCards = [
  {
    "id": "comment-1",
    "name": "listener_2049",
    "meta": "YouTube comment placeholder",
    "text": "I knew it was AI and still got chills. That makes me uncomfortable, but it also feels important."
  },
  {
    "id": "comment-2",
    "name": "aesthetic_witness",
    "meta": "Audience reaction placeholder",
    "text": "The weird part is not that the song is perfect. It is that I keep trying to find the person behind it."
  },
  {
    "id": "comment-3",
    "name": "source_needed",
    "meta": "Social response placeholder",
    "text": "If no one experienced the feeling while making it, am I responding to art or to a mirror of previous art?"
  }
];

export const podcastTranscript = [
  {
    "speaker": "AI Host",
    "time": "00:00",
    "text": "Placeholder transcript line. Replace this with the AnySpeech podcast transcript once available."
  },
  {
    "speaker": "AI Guest",
    "time": "00:18",
    "text": "The question is whether meaning can exist without subjective experience."
  },
  {
    "speaker": "AI Host",
    "time": "00:42",
    "text": "The transcript component is ready for future line highlighting while audio plays."
  }
];

