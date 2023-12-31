\c blogs_dev;

INSERT INTO users ( username, fullName, password, created_at ) VALUES

('AntonEgo', 'Anton Ego', 'test', '2023-08-24'),
('Fizalpha', 'no name', 'monkey', '2023-08-24');


INSERT INTO blogs(author_id, author, name, image, body, type, date) VALUES
('1', 'AntonEgo', 'Gusteau''s' , 'https://arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/26RUAQGO65BNJLEFKVG6MD4BNM.jpg','In many ways, the work of a critic is easy. We risk very little yet enjoy a position over those who offer up their work and their selves to our judgment. We thrive on negative criticism, which is fun to write and to read. But the bitter truth we critics must face, is that in the grand scheme of things, the average piece of junk is probably more meaningful than our criticism designating it so. But there are times when a critic truly risks something, and that is in the discovery and defense of the new. The world is often unkind to new talent, new creations. The new needs friends.

Last night, I experienced something new, an extra-ordinary meal from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core. In the past, I have made no secret of my disdain for Chef Gusteau''s famous motto: "Anyone can cook." But I realize, only now do I truly understand what he meant. Not everyone can become a great artist, but a great artist can come from anywhere. It is difficult to imagine more humble origins than those of the genius now cooking at Gusteau''s, who is, in this critics opinion, nothing less than the finest chef in France. I will be returning to Gusteau''s soon, hungry for more.','Food', '08-18-2023' ),


( '2', 'Fizalpha', 'Baldur''s Gate 3 Review', 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2322/aba0802b6d753d0a11f9ccc0f34d945b9abfd2d1f7d89330.png','Baldur''s Gate 3 is a true evolution to Divinity: Original Sin 2 while also porting over Dungeons & Dragons 5e mechanics to nearly everything you do. This is the only game I''ve played that actually feels like Dungeons & Dragons aside from Disco Elysium, though that had no combat mechanics.

Baldur''s Gate 3 is finally out of early access and fully released, and it is a masterpiece of role-playing. It is a game that lets you create your own story and adventure in a vast and rich world, full of choices, consequences, and possibilities. You can play as one of the pre-made characters or create your own from scratch, choosing from a variety of races, classes, backgrounds, and skills. You can recruit up to three companions to join your party, each with their own personality, goals, and secrets. You can explore the Sword Coast and beyond, encountering friends and foes, allies and enemies, mysteries and dangers.

Baldur''s Gate 3 is not just a faithful adaptation of the tabletop game, but also a stunning visual and audio spectacle. The graphics are gorgeous, the animations are fluid, and the environments are detailed. The voice acting is superb, the music is epic, and the sound effect design is well-made for the kind of game it is. The game also runs smoothly on PC, despite being a huge and complex game.

Overall, Baldur''s Gate 3 is an impressive achievement that deserves praise and recognition. It is one of the best RPGs ever made, and one of the closest to emulating the experience of tabletop D&D. It will likely go down as one of the greatest RPGs of all time, if it hasn''t already, but especially so once the Workshop modding support is added to enhance replayability. All future RPGs will be compared to this game as they used to be compared to Skyrim and the Witcher 3. It is a game that will keep you hooked for hours, days, or even weeks, and even months or years later you''ll find new things you haven''t seen before on a previous playthrough keeping you engaged and wanting to come back for more.', 'Games', '08-18-2023');



INSERT INTO comments ( blog_id, name, content, date) VALUES

('1', 'Fizalpha' , 'cool', '8-19-2023'),
('2', 'someguycalledGeorge', 'I think thats the best game I ever played', '8-19-2023');