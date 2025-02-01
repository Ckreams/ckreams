// 抽签数据
const lotteries = [
    {
        "title": "第一签 上上",
        "content": `子宫。
天开地辟作良缘，日吉时良万物全；
若得此签非小可，公行忠正帝王宣。

解曰：急速非速，年来直时，
佛神择笔，先报君知。
此签万事求谋具吉利也。`
    },
    {
        "title": "第二签 中平",
        "content": `子宫。
鲸鱼未变守江湖，不可升腾离碧波；
异日峥嵘身变化，许君一跃跳龙门。

解曰：得忍且忍，得耐且耐，
须用时，叫功名定在。
此签几多有进，退则吉也。`
    },
    {
        "title": "第三签 下下",
        "content": `子宫。
临风冒雨去还归，役役劳身似燕儿；
衔得泥来若作垒，到头垒坏复成泥。

解曰：千般百计，晨昏不爽，
谁心此事，劳心到底。
此签燕子衔泥之象，万事芝心费力也。`
    },
    {
        "title": "第四签 中平",
        "content": `子丑宫。
千年古镜复重圆，女再求夫男再婚；
自此门庭多改换，更添福禄共子孙。

解曰：五五二五，骑龙跨凤，
须事劳心，于中有补。
此签古镜重圆之象，万事有贵人也。`
    },
    {
        "title": "第五签 中平",
        "content": `子宫。
一锄凿地要求泉，努力求之得最难；
无意俄然遇知己，相逢携手上青天。

解曰：欲求心事，西方可求，
不论灾讼，立地可谋。
此签掘地求泉之象，万事劳心有益也。`
    },
    {
        "title": "第六签 中平",
        "content": `丑宫。
报君岩下铜鸟居，须是还他大丈夫；
舍得金宝谁可得，通行天下此人无。

解曰：会用无富，身清岂贫，
待时乐利，相与哲人。
此签报岩铜鸟之象，凡事宜真乃吉也。`
    },
    {
        "title": "第七签 下下",
        "content": `丑宫。
奔波阻隔重重险，带水拖泥又渡山；
更望他乡求用事，千山万水未回还。

解曰：退身可得，进步难为，
只可守旧，莫望高位。
此签带水拖泥之象，万事守旧则吉也。`
    },
    {
        "title": "第八签 上上",
        "content": `丑宫。
茂林松柏正兴旺，雨雪风霜总不摧；
异日自然成大用，功名作个栋梁材。

解曰：路有亨通，终身有功，
田蚕丰熟，谷稻兴隆。
此签茂林松柏之象，万事有贵气也。`
    },
    {
        "title": "第九签 上上",
        "content": `丑宫。
愿君勿问心中事，此意偏宜说向公；
一片明心清皎月，恰如晧月正当中。

解曰：平心正直，理顺则宽，
圣无私语，终有分明。
此签晧月当空之象，万事光明通达。`
    },
    {
        "title": "第十签 中平",
        "content": `亥宫。
石芷无价宝和珍，只管他乡外界寻；
宛如持灯理觅火，不如收拾枉劳心。

解曰：姻缘会遇，何事不成，
须无别意，眼前是真。
此签持灯觅火之象，万事待时成就也。`
    },
    {
        "title": "第十一签 中平",
        "content": `亥宫。
欲求万事喜非常，争奈亲姻只暂忙；
到头毕竟乘鹿箭，贵人指引贵人乡。

解曰：变换得缘，啼哭双全，
要求光明，因灾作福。
此签因祸得福之象，万事营谋大吉也。`
    },
    {
        "title": "第十二签 上上",
        "content": `亥宫。
否极泰来咫尺间，抖擞君子出于山；
若遇虎兔佳音信，立志忙中事不难。

解曰：有意兴发，到彼安然，
若问用事，得遇贵人。
此签因祸得福，逢凶化吉，万事营谋大吉也。`
    },
    {
        "title": "第十三签 上上",
        "content": `亥宫。
自小生在富贵家，眼前万事总奢华；
蒙君赐紫金鱼带，四海传名足可夸。

解曰：囚有逢赦，病即安然，
龙门得遇，名遍皇宫。
此签　万事皆大吉也。`
    },
    {
        "title": "第十四签 上上",
        "content": `卯宫。
宛如仙鹤出樊笼，脱得樊笼处处空；
南北东西无障碍，任君直上九霄宫。

解曰：任君无疑，路有亨通，
随心自在，逍遥得意。
此签万事先凶后吉也。`
    },
    {
        "title": "第十五签 下下",
        "content": `卯宫。
行人一口气难吞，却有灾事近来临；
鸟投林巢无所宿，好寻深处稳安身。

解曰：若得人愁，何时可伸，
好言不信，守旧待时。
此签鸟投林巢之象，凡事宜忍耐，终应心也，宜耐守已。`
    },
    {
        "title": "第十六签 上上",
        "content": `卯宫。
愁眉思虑渐时开，启出云宵喜日来；
宛如粪土一块玉，良工一举出尘埃。

解曰：得处无失，损中有益，
不用多求，必定遇吉。
此签良工举玉之象，凡事谋皆大吉。`
    },
    {
        "title": "第十七签 下下",
        "content": `卯宫。
莫听闲言说是非，晨昏只好念阿弥；
若将妄语为真实，画饼如何止得饥。

解曰：心中不定，枉看经文，
恰似画饼，空自欢心，
此签画饼充饥之象，凡事乱交，虚多实少。`
    },
    {
        "title": "第十八签 中平",
        "content": `卯宫。
金鸡西坠兔东升，日夜循环古自今；
僧道得之无不利，工商农士各从心。

解曰：心中无事，所谋有功，
如弓上箭，一时当空。
此签阳长阴短之象，凡事皆遂心也。`
    },
    {
        "title": "第十九签 下下",
        "content": `辰宫。
急水滩头放船儿，狂风作浪欲何为；
若要安然求稳静，守时浪静过此危。

解曰：急水登船，静处待时，
若问求谋，佛前施善。
此签凡事守旧待时也。`
    },
    {
        "title": "第二十签 上上",
        "content": `辰宫。
当春久雨喜初晴，玉兔金鸡渐渐明；
旧事销散新事遂，看看一跳过龙门。

解曰：佛力扶持，有灾无危，
福自天生，百事遂意。
此签阴阳会合之象，凡事和合大吉也。`
    },
    {
        "title": "第二十一签 上上",
        "content": `辰宫。
阴阳道合总由天，女嫁男婚岂偶然；
但看龙蛇相会合，熊罢入梦喜团圆。

解曰：谋望从心，婚姻孕男，
资财进盖，更利田蚕。
此签凡事和合大吉也。`
    },
    {
        "title": "第二十二签 中平",
        "content": `巳宫。
旱时田地皆枯竭，谢天甘雨下霖淋；
花果草木都润泽，始知一雨值千金。

解曰：田蚕倍熟，命运相生，
病遇良药，行人便回。
此签旱逢甘雨之象，凡事有救也。`
    },
    {
        "title": "第二十三签 中平",
        "content": `巳宫。
欲攀仙桂入蟾宫，岂虑天门不放行；
忽然一般音信好，高人自送岭头云。

解曰：商家利益，行芷有危，
病安讼遂，务需善施。
此签凡事后必亨通也。`
    },
    {
        "title": "第二十四签 下下",
        "content": `巳宫。
不成理论不成家，水性痴人似落花；
若问君恩难得力，到头毕竟事如麻。

解曰：是非莫说，必须仔细，
心正理顺，即不伤身。
此签痴人蒙塞之象，凡事守旧待时也。`
    },
    {
        "title": "第二十五签 中平",
        "content": `巳宫。
过了忧危第几重，从今再历永无凶；
宽心自有宽心计，得遇高人护大功。

解曰：讼终自理，病得安痊，
出入求谋，古井逢泉。
此签凡事贵人成就也。`
    },
    {
        "title": "第二十六签 下下",
        "content": `午宫。
上下传来事总虚，天边收得一封书；
书中许我功名事，直待终时亦是空。

解曰：目下心烦，求闲不闲，
欲望名利，守旧心安。
此签凡事防小人守旧也。`
    },
    {
        "title": "第二十七签 中平",
        "content": `午宫。
一谋一用一番机，虑後思前不敢为；
时至贵人相助力，银墙铁壁好安居。

解曰：改旧成新，寒花遇春，
从前阻隔，今得贵人。
此签凡事近贵人好也。`
    },
    {
        "title": "第二十八签 下下",
        "content": `午宫。
东方月上正婵娟，顷刻云遮亦暗存；
或有圆时还有缺，更言非看复皆全。

解曰：浮云遮月，还需疑惑，
等到云散，便见明月。
此签凡事昏迷未定也。`
    },
    {
        "title": "第二十九签 上上",
        "content": `午宫。
宝剑出匣跃光明，在匣全然不惹尘；
今得贵人携出现，有威有势众人钦。

解曰：宝剑出匣，光芒万丈，
贵人指引，百事欢畅。
此签凡事旧时得利也。`
    },
    {
        "title": "第三十签 下下",
        "content": `午宫。
劝君切莫向他求，似鹤飞来暗箭投；
若去采薪蛇在草，恐遭毒口也忧愁。

解曰：开口合齿，闭事莫理，
若是生心，到头害已。
此签凡事守已小心也。`
    },
    {
        "title": "第三十一签 中平",
        "content": `未宫。
清闲无忧静处坐，饱后食茶困时卧；
放下身心不用忙，必定不遭殃与祸。

解曰：心向我佛，守旧安然，
直待时来，事情偶然。
此签守旧安然之象，凡事宜宽心待时也。`
    },
    {
        "title": "第三十二签 中平",
        "content": `未宫。
前程杳杳定无疑，石中藏玉有谁知；
一朝良匠分明剖，始觅其中碧玉奇。

解曰：玉在石中，异人少知，
直待分明，近可施为。
此签破石见玉之象，凡事有吉无凶也。`
    },
    {
        "title": "第三十三签 中平",
        "content": `未宫。
内藏无价宝玉珍，得玉何须外界寻；
不如等待高人识，恰如灵雨涤烦襟。

解曰：内藏珍玉，不须外寻，
遇贵指示，不劳空心。
此签凡事守旧则吉也。`
    },
    {
        "title": "第三十四签 上上",
        "content": `未宫。
行藏出入礼仪恭，言必中听信必聪；
心事了然俱清澈，光明如日正当空。

解曰：心中无事，抽水澄清，
不须疑惑，事自然成。
此签如日当空之象，凡事求谋得意也。`
    },
    {
        "title": "第三十五签 中平",
        "content": `申宫。
衣冠重整旧宿风，道是无功却有功；
扫却当途荆棘刺，三人共议事和同。

解曰：不用辨疑，自有佳期，
若问前程，异路可遇。
此签衣冠重整之象，凡事先难后易也。`
    },
    {
        "title": "第三十六签 下下",
        "content": `申宫。
欲待安身运到时，风中灯火不得宜；
不如收拾深堂坐，庶免光摇拂拂期。

解曰：静处安身，待命到时，
佛前施善，守旧无疑。
此签风摇灯火之象，凡事来逆守常也。`
    },
    {
        "title": "第三十七签 下下",
        "content": `申宫。
月照天书静处期，却被云雾昏又迷；
宽心等待浮云散，此时更宜好施为。

解曰：家里忧恼，人口有灾，
佛庙布施，防止破财。
此签云遮月之象，凡事求谋守旧善施也。`
    },
    {
        "title": "第三十八签 上上",
        "content": `申宫。
百事从今百路通，好似文王遇太公；
当年文明高天下，声名赫耀帝城中。

解曰：功名显达，百事亨通，
行程一步，更见有功。
此签贵人指引之象，凡事通达有功也。`
    },
    {
        "title": "第三十九签 中平",
        "content": `酉宫。
天边消息应难思，切莫牵罡妄强求；
若把石头磨作镜，曾知枉费已工夫。

解曰：千方百计，枉费工夫，
不如守旧，必有来由。
此签不可攀登之象，凡事安静则吉也。`
    },
    {
        "title": "第四十签 中平",
        "content": `酉宫。
红轮西坠兔东升，阴长阳短百事亨；
若是女人宜望用，增添禄福称你心。

解曰：阴利女人，不宜男子，
若为病谋，先凶后吉。
此签凡事先难后易也。`
    },
    {
        "title": "第四十一签 下下",
        "content": `酉宫。
无限好语君须记，却为隐贼作知己；
莫贪眼下有些甜，可虑他年前样苦。

解曰：花言巧语，君子莫信，
牢记心头，不生寂寞。
此签认假作真也。`
    },
    {
        "title": "第四十二签 上上",
        "content": `酉宫。
皇君圣后总为恩，复待祈祷无损增；
一切有情皆受用，人间天下得期亨。

解曰：天皇恩泽，始终莫忘，
晨昏念佛，可宜烧香。
此签凡事成就大吉也。`
    },
    {
        "title": "第四十三签 上上",
        "content": `戌宫。
天地交泰万物全，自营自养自然锦；
收罗万象皆精彩，事事称心谢圣贤。

解曰：天生万物，谋望皆通，
福德相助，瑞气匆匆。
此签凡事大吉无危也。`
    },
    {
        "title": "第四十四签 中平",
        "content": `戌宫。
棋逢敌手着便宜，黑白盘中未决时；
皆因一着知胜败，须教自有好推移。

解曰：欲求心事，恰似围棋，
到底胜败，先用后机。
此签凡事贵人和合也。`
    },
    {
        "title": "第四十五签 上上",
        "content": `戌宫。
温柔自古胜强刚，积善于门大吉昌；
若有贵人得此卦，宛如正渴遇琼浆。

解曰：天地有知，恩泽非常，
观音保佑，终生莫忘。
此签凡事贵人和合也。`
    },
    {
        "title": "第四十六签 上上",
        "content": `戌宫。
劝君耐守旧生涯，把定心肠莫听邪；
直待有人轻著力，枯枝老树再生花。

解曰：守旧守旧，事自成就，
动则多灾，静则无咎。
此签枯木生花，守旧待时，凡事等待则吉也。`
    },
    {
        "title": "第四十七签 上上",
        "content": `亥宫。
锦上添花色愈鲜，运来禄马喜双全；
时至莫道功名慢，一举登科四海传。

解曰：守旧变新，复有双营，
平生志愿，皆由是命。
此签凡事大吉大利也。`
    },
    {
        "title": "第四十八签 上上",
        "content": `亥宫。
鲲鸟飞来化作鹏，遨游快乐去飞腾；
翱翔万里云霄外，任是诸禽总不能。

解曰：鲲鸟为鹏，余禽不能，
佛前点香，福禄自然。
此签有事变大吉也。`
    },
    {
        "title": "第四十九签 下下",
        "content": `亥宫。
天寒地冻水成冰，何须贫苦自悭名；
吸得守已静处坐，待时再变自然明。

解曰：水冻成冰之象，凡事不用枉求。`
    },
    {
        "title": "第五十签 上上",
        "content": `亥宫。军师府。
五湖四海任君行，高挂帆篷自在撑；
若得顺风随即至，落船宝贝喜层层。

解曰：自在无忧，不须着力，
财喜皆来。此签皆遂大吉也。`
    },
    {
        "title": "第五十一签 中平",
        "content": `子宫。
夏日初临日最长，人人愁热闷非常；
天公也解诸人意，薰风拂过自然凉。

解曰：道用莫疑，自有佳期，
营谋用事，无须质疑。
此签凡事自凉则好也。`
    },
    {
        "title": "第五十二签 下下",
        "content": `子宫。
水中捞月费工夫，费尽工夫却又无；
莫信闲言与乱语，枉劳心力独身孤。

解曰：言语难思，劳心费力。
此签守旧，不必劳心也。`
    },
    {
        "title": "第五十三签 上上",
        "content": `子宫。
失意翻成得意时，龙吟虎啸两相宜；
青天自有通宵路，许我功名再人期。

解曰：教去且去，教住即住，
自有亨通，到头必利。
此签凡事旺利也。`
    },
    {
        "title": "第五十四签 下下",
        "content": `子宫。
梦中得宝醒来无，自谓南山只是锄；
苦问婚姻并问病，别寻他路好相扶。

解曰：物在水中，形影长短，
皆难分定，心用自量。
此签凡事费力劳心也。`
    },
    {
        "title": "第五十五签 上上",
        "content": `丑宫。
父贤传子子传孙，衣禄丰盈只在天；
金马玉堂人快乐，饥食渴饮倦时眠。

解曰：接竹饮泉，流传不绝，
君子谋望，无不怀揣。
此签接竹引泉之象，凡事谋望大吉也。`
    },
    {
        "title": "第五十六签 中平",
        "content": `丑宫。
涧小石粗流水响，月白风清贵人忙；
路须君问何方去，管取林中花处香。

解曰：营谋用事，劳心费力，
守旧待时，凡事大吉。
此签凡事大吉有贵人。`
    },
    {
        "title": "第五十七签 中平",
        "content": `丑宫。
闻是说非风过耳，好衣好禄自当中；
君莫记取他年事，汝意还与我意同。

解曰：所作谋望，皆大利喜，
从公用力，如手逢娘。
此签是非不听之象，凡事有贵人扶则大吉也。`
    },
    {
        "title": "第五十八签 下下",
        "content": `丑宫。
直言说话君须记，莫在他乡求别艺；
劝君安守旧生涯，除却有馀都不利。

解曰：得过且过，可取旧路，
吸宜守旧，莫思别事。
此签凡事守旧则吉也。`
    },
    {
        "title": "第五十九签 下下",
        "content": `亥宫。
直上重楼去藏身，四围荆棘绕作林；
天高君命长和短，得意翻成失意人。

解曰：如醉饮酒，只宜守旧，
无义莫交，运灾无咎。
此签守旧待时之象，凡事不利举动也。`
    },
    {
        "title": "第六十签 下下",
        "content": `亥宫。
抱薪救火火增烟，烧遍三千及大千；
若问营谋并出入，不如收拾枉劳情。

解曰：千谋百计，一毫无益，
不如莫动，自用防灾。
此签抱薪救火之象，凡事宜谨防也。`
    },
    {
        "title": "第六十一签 中平",
        "content": `亥宫。
日上吟诗月下歌，逢场作戏笑呵呵；
相逢会遇难藏避，喝彩齐唱嗹哩罗。

解曰：在外在屋，虽吟读曲，
一片欢心，命由祸福。
此签旧平稳之象，凡事大吉也。`
    },
    {
        "title": "第六十二签 中平",
        "content": `亥宫。
晨昏全赖佛扶持，虽是逢危且不危；
若得贵人来指引，此时财食自相随。

解曰：平平稳稳，四方名显，
改旧从新，皆免凶险。
此签贵人指引之象，凡事菩萨保佑大吉也。`
    },
    {
        "title": "第六十三签 下下",
        "content": `卯宫。
昔日行船失了针，今朝依旧海中寻；
若还寻得原针在，也费功夫也费神。

解曰：福禄皆须佛，劝君谨守。
此签大海捞针之象，凡事劳心费力也。`
    },
    {
        "title": "第六十四签 下下",
        "content": `卯宫。
游玩却在碧波池，暗遭罗网四边围；
思量无计翻身出，命到泉关苦独悲。

解曰：屋下安身，祸从天来，
佛庙施善，免遭大灾。
此签天罗地网之象，凡事宜着力提防。`
    },
    {
        "title": "第六十五签 下下",
        "content": `卯宫。
眼前欢喜未为欢，亦不危兮亦不安；
割肉成疮因甚事，不如守旧待时宽。

解曰：知止则止，知宽则宽，
割自手肉，痛疾一番。
此签只宜守旧。`
    },
    {
        "title": "第六十六签 下下",
        "content": `卯宫。
路险马乏人行急，失阵单卒困相当；
滩高风浪船头破，日暮花残天降藉。

解曰：守旧守旧，安心无咎，
不用求谋，佛前烧香。
此签下滩船破之象，凡事慎防险阻。`
    },
    {
        "title": "第六十七签 中平",
        "content": `卯宫。
一条金秤秤君心，无减无增无重轻；
为人平生心正直，文章全识义皆明。

解曰：平生正直，到底清平，
只依本人份，处处安身。
此签一生正直之象，凡事平稳无凶也。`
    },
    {
        "title": "第六十八签 中平",
        "content": `卯宫。
门庭日庆喜非常，积善于门大吉昌；
婚姻田蚕诸事遂，病逢妙药得安康。

解曰：春来日夜，百花自开，
事莫迟疑，从今显达。
此签凶去吉来之象，凡事营谋大吉也。`
    },
    {
        "title": "第六十九签 中平",
        "content": `辰宫。
冬来岭上一枝梅，叶落枯枝总不摧；
探得阳春消息至，依然还我作花魁。

解曰：一箭射空，是空非空，
等待春景，悉在其中。
此签梅花占魁之象，凡事宜迟则吉。`
    },
    {
        "title": "第七十签 下下",
        "content": `辰宫。
役役恰似采花蜂，飞去西南又去东；
春尽花残无觅处，此身不恋旧丛中。

解曰：春花阴雨，久而不晴，
求谋无用，不如安静。
此签蜜蜂采花之象，凡事劳心费力也。`
    },
    {
        "title": "第七十一签 下下",
        "content": `辰宫。
谁知苍龙十九衙，好似女子嫁二夫；
自是一弓施两箭，切恐龙马上安居。

解曰：不出重重，事由天命，
正放中间，切宜谨慎，
此签凡事再合则吉也。`
    },
    {
        "title": "第七十二签 下下",
        "content": `辰宫。
弄蜂须要求他蜜，只怕遭他尾上针；
虽是眼前有异路，暗里深藏荆棘林。

解曰：事须仔细，不用强求，
工蜂采蜜，看甚来由。
此签凡事劳心旨费力。`
    },
    {
        "title": "第七十三签 上上",
        "content": `巳宫。
春来雷震百鸟鸣，翻身一转离泥土；
忽过风云交际处，有朝变化更成龙。

解曰：雷发时节，出入尤成，
一朝变化，直到龙门。
此签凡事遇贵人。`
    },
    {
        "title": "第七十四签 下下",
        "content": `巳宫。
似鸽飞来自投笼，欲得翻身却不通；
南北东西都难出，此卦只恐恨无穷。

解曰：进身有虑，退步难行，
依头前去，事恐难成。
此签凡事守旧小心也。`
    },
    {
        "title": "第七十五签 下下",
        "content": `午宫。
宛如抱虎过高山，战战竞竞胆碎寒；
幸得山前逢妙手，切须保守一身安。

解曰：前程有阻，若问求谋，
到底辛苦。
此签抱虎过山之象，凡事惊恐凶险也。`
    },
    {
        "title": "第七十六签 下下",
        "content": `午宫。
鱼龙混杂意和同，耐守寒潭未济通；
不觉一朝头角耸，禹门一跳到龙宫。

解曰：须有根基，更要待时，
营谋出入，切莫妄为。
此签鱼龙未变之象，凡事待时度事。`
    },
    {
        "title": "第七十七签 下下",
        "content": `午宫。
梦中说事获多财，身外浮名总虚来；
水远山遥难信实，贵人一指笑颜开。

解曰：如梦说梦，声名莫望，
只好待时，贵人指引。
此签凡事多虚少实也。`
    },
    {
        "title": "第七十八签 中平",
        "content": `午宫。
冷水来浇白雪洋，不寒不热自温凉；
若行天下无他事，惟有身中一艺强。

解曰：囚人逢赦，病遇良医，
求财谋望，贵人指引。
此签凡事平稳大吉也。`
    },
    {
        "title": "第七十九签 下下",
        "content": `午宫。
虚空许愿保平安，保得人安愿未还；
莫忘天恩失还了，岂知佛语莫轻慢。

解曰：有人见我，心语不忘，
佛眼明示，切莫轻瞒。
此签凡事须守旧也。`
    },
    {
        "title": "第八十签 上上",
        "content": `未宫。
直上高岩去学仙，岂知一旦帝王宣；
青天白日常明照，心正声名四海传。

解曰：有始有终，莫往西东，
心中有事，贵人重重。
此签凡事和合大吉。`
    },
    {
        "title": "第八十一签 上上",
        "content": `未宫。
梧桐叶落秋将暮，行客奔程似若飞；
谢得天公轻著力，顺风船载宝珍归。

解曰：心中从事，天必从之，
营谋用事，尽可施为。
此签凡事先凶后吉也。`
    },
    {
        "title": "第八十二签 下下",
        "content": `未宫。
炎炎烈火焰连天，焰中还有一朵莲；
到底未烧终不害，依前生叶长枝根。

解曰：虽是危险，不伤其身，
营谋用事，皆有贵人，
此签火中生莲之象，凡事先难后易。`
    },
    {
        "title": "第八十三签 中平",
        "content": `未宫。
譬若初三四五月，半有半无未完全；
等待十五良宵夜，到处光明到处圆。

解曰：如月初七，守旧待时，
待至圆时，无有不吉。
此签凡事候时则吉也。`
    },
    {
        "title": "第八十四签 下下",
        "content": `未宫。
因名丧德不和同，切莫急中变作凶；
酒醉不知何处去，青松影里梦朦胧。

解曰：寒鱼离水，美中不美，
若问求谋，不知何处。
此签凡事守旧，不可动也。`
    },
    {
        "title": "第八十五签 中平",
        "content": `申宫。
云开雾罩山前路，万物园中可再圆；
醉读诗书沉梦醒，贵人指引步天台。

解曰：老者如花，春残再开，
欲求名利，晚遇横财。
此签凡事主后吉也。`
    },
    {
        "title": "第八十六签 上上",
        "content": `申宫。
春来花发映阳台，万物车前进宝财；
跃过禹门三级浪，恰如平地一声雷。

解曰：一朝受职，如贫得宝，
谋望从心，卦中第一。
此签人臣朝帝之象，凡事大利也。`
    },
    {
        "title": "第八十七签 中平",
        "content": `申宫。
人行半岭日衔山，峻险层岩未可安；
仰望上天垂护佑，此身犹在太虚间。

解曰：銮石见玉，淘沙见金，
需要着力，只是劳心。
此签凡事有贵人变之则吉也。`
    },
    {
        "title": "第八十八签 下下",
        "content": `酉宫。
木雕一虎在当门，须是有威不害人；
分明说过无妨事，忧恼迟疑恐惧心。

解曰：炉头点扫，似耳过风，
可宜作福，前凶后吉。
此签凡事宜旧，则不妨也。`
    },
    {
        "title": "第八十九签 上上",
        "content": `酉宫。
出入营谋大吉昌，似玉无瑕石中藏；
如今幸得高人引，斯时得宝有风光。

解曰：如石藏玉，贵人指引，
得宝心，欢喜有益。
此签凡事称心大喜也。`
    },
    {
        "title": "第九十签 上上",
        "content": `酉宫。
忽然一信向天飞，泰山宝贝落船归；
若问路途成好事，前头仍有贵人推。

解曰：若问功名，前有贵人，
更添喜气，财禄丰盈，
此签功名成就之象，凡事进财大吉也。`
    },
    {
        "title": "第九十一签 上上",
        "content": `酉宫。
好展愁眉届众来，前途改变喜多才；
一条大路如天阔，凡有施为总称怀。

解曰：一条大路，可向前方，
心中有事，通达称心。
此签凡事顺遂大吉也。`
    },
    {
        "title": "第九十二签 上上",
        "content": `酉宫。
自幼为旅任施为，财禄丰盈不用求；
若问进身谋望事，秀才出去状元回。

解曰：自小到大，无阻无碍，
作事营谋，功名定在。
此签谋望成功之象，凡事有喜无忧也。`
    },
    {
        "title": "第九十三签 中平",
        "content": `戌宫。
鸾凤翎毛雨落垂，当时应被雀轻欺；
忽朝一日云霄霁，依旧还我振羽衣。

解曰：小人正盛，君子莫为，
切须守旧，待时而出。
此签鸾凤被雨之象，凡事先难后易也。`
    },
    {
        "title": "第九十四签 中平",
        "content": `戌宫。
君子莫信小人推，事有差讹惹是非；
琴鸣须有知音在，守常安静得便宜。

解曰：知已守分，闲事莫理，
待得贵人，无不欢喜。
此签要逢知己之象，凡事守常则吉也。`
    },
    {
        "title": "第九十五签 中平",
        "content": `戌宫。
事业功勤暮与朝，营华物态不胜娆；
若见金鸡报君语，福禄声名价自超。

解曰：志气在勤，事业可成，
金鸡报晓，无不欣欢。
此签勤俭获福之象，凡事进益大吉也。`
    },
    {
        "title": "第九十六签 上上",
        "content": `戌宫。
巍巍宝塔不寻常，八面玲珑尽放光；
劝君志气勤顶礼，作善天龙降千祥。

解曰：瑞气当空，众人皆见，
相距不远，福即前现。
此签福德前现之象，凡事大吉也。`
    },
    {
        "title": "第九十七签 下下",
        "content": `亥宫。
当空点烛摇疏影，恍惚铺成杨柳花；
累被儿童来收拾，岂知只是浮自嗟。

解曰：富贵在天，贫穷由命，
不用求人，皆是前定。
此签当空燃烛之象，凡事少利也。`
    },
    {
        "title": "第九十八签 下下",
        "content": `亥宫。
出入求财事迟疑，只恐闲愁惹是非；
如鸟飞投罗网里，相逢能有几多时。

解曰：吉凶随天，不由自己，
若问诸般，百事愁牵。
此签如鱼入网之象，凡事皆不利也。`
    },
    {
        "title": "第九十九签 下下",
        "content": `亥宫。
勒马持鞭直过来，半有忧危半有灾；
恰似遭火焚烧屋，天降一雨汤成灾。

解曰：终是劳心，若得是非，
枷锁临身，恐忧无益。
此签半忧半灾之象，凡事不利也。`
    },
    {
        "title": "第一百签 下下",
        "content": `亥宫。
佛神说尽与君知，痴人说事转昏迷；
老人抽得灵签足，不如守旧待来时。

解曰：抽得灵签，尽报君知，
痴人昏迷，须待时至。
此签守常莫动之象，凡事遂忌也。`
    },
    {
        "title": "第一百一签 上上",
        "content": `子宫。
天时久旱逢甘露，空谷传声开佳音。
事怕不通则变，灵丹点铁也成金。

解曰:家宅大吉，造作遂意，
谋望兴隆，诸事皆宜，
田蚕丰收，功名合时，
婚姻偕老，失物即见。`
    },
    {
        "title": "第一百二签 中平",
        "content": `子宫。
人言海上有神仙，方士如何去不返。
有真无假无实迹，四门无路到平关。

解曰:家宅中平，婚姻难成，
求财薄利，病者问神，
谋望可以，功名未遂，
移从不宜，自身吉利。`
    },
    {
        "title": "第一百三签 上上",
        "content": `子宫。
中原狡兔正肥秋，大请将军脱窜归。
依把锦书传雁足，果然一箭中双雕。

解曰:门庭吉庆，财谷盈丰，
夫荣妻贵，六甲成男，
病须提防，行人将至，
谋求财利，诸事遂意。`
    },
    {
        "title": "第一百四签 上上",
        "content": `子宫。
喜袭自问一点黄，诏书催子入朝门。
从今显达皆荣贵，且待天颜荫宠光。

解曰:家增百福，婚姻和合，
孕生贵子，失物即见，
田蚕丰收，造作成就，
谋望尽意，行人将至。`
    },
    {
        "title": "第一百五签 上上",
        "content": `丑宫。
扁舟乘浪装高载，万里顺风去作商。
百货低昂从积蓄，义取财帛富贵乡。

解曰:家宅平稳，造作荣昌，
功名顺遂，官讼安祥，
求谋有遂，姻事成变，
出外贸易，宝贝盈箱。`
    },
    {
        "title": "第一百六签 上上",
        "content": `丑宫。
否极应知有泰来，灵芝生出自起埃。
阳回九十开春去，时至百花大盛开。

解曰:家宅大吉，田蚕丰熟，
造作造成，求谋后遂，
病遇良医，婚姻和合，
讼吉消灾，行人将至。`
    },
    {
        "title": "第一百七签 上上",
        "content": `丑宫。
卦中吉兆是青龙，作事求谋处处通。
男婚女嫁官事吉，更无忧虑喜重重。

解曰:家宅大利，财绵增添，
功名有望，贵显门庭，
失物即见，孕生男儿，
病可平安，求谋得遂。`
    },
    {
        "title": "第一百八签 上上",
        "content": `丑宫。
自尽苦难白龙乡，几年疑虑变为祥。
今朝得到江南地，拔尽浮云见太阳。

解曰:门庭大吉，琴瑟和谐，
病医相合，失物即见，
求谋外出，贵人相携，
孕生男儿，诸事遂意。`
    },
    {
        "title": "第一百九签 万事大吉",
        "content": `弟子拜佛心子专，理应购油来添灯。
若是灯油添得足，保你家门万事兴。`
    }
];

// DOM元素引用
const drawBtn = document.querySelector('.draw-btn');
const resultBox = document.querySelector('.result-box');
const resultTitle = document.getElementById('resultTitle');
const resultContent = document.getElementById('resultContent');
const confirmBtn = document.querySelector('.confirm-btn');

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    drawBtn.addEventListener('click', drawLottery);
    confirmBtn.addEventListener('click', closeResult);
});

// 核心功能函数
function drawLottery() {
    // 淡出按钮动画
    drawBtn.style.opacity = '0';
    
    // 500ms后执行抽签
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * lotteries.length);
        const selected = lotteries[randomIndex];
        
        // 更新结果内容
        resultTitle.textContent = selected.title;
        resultContent.textContent = selected.content;
        
        // 显示结果弹窗
        resultBox.classList.add('show');
    }, 500);
}

function closeResult() {
    // 隐藏结果弹窗
    resultBox.classList.remove('show');
    
    // 重置按钮状态
    drawBtn.style.opacity = '1';
}
