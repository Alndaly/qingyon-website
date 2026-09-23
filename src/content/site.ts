// 官网所有文案与数据集中在此处，修改内容无需改动组件。

export const company = {
	name: '青庸科技',
	nameEn: 'Qingyon',
	legalName: '青庸科技（杭州）有限公司',
	legalNameEn: 'Qingyon Technology (Hangzhou) Co., Ltd.',
	email: '1142704468@qq.com',
	github: 'https://github.com/Qingyon-AI',
	icp: '浙ICP备2024137385号',
	icpUrl: 'https://beian.miit.gov.cn/',
	city: '中国 · 杭州',
};

export const nav = [
	{ label: '产品', href: '#products' },
	{ label: '服务', href: '#services' },
	{ label: '案例', href: '#cases' },
	{ label: '方法', href: '#process' },
	{ label: '关于', href: '#about' },
];

export const stats = [
	{ value: '3', unit: '款', label: '自研 AI 产品在线运行' },
	{ value: '290', unit: '+', label: 'Revornix GitHub Stars' },
	{ value: '297', unit: '个', label: 'WeSmile 后端接口' },
	{ value: '5', unit: '端', label: 'Web · 小程序 · 桌面 · 插件 · SDK' },
];

export type Product = {
	key: 'revornix' | 'wesmile' | 'mosael';
	name: string;
	nameZh?: string;
	url: string;
	domain: string;
	category: string;
	title: string;
	description: string;
	points: string[];
	tags: string[];
	extra?: { label: string; href: string };
};

export const products: Product[] = [
	{
		key: 'revornix',
		name: 'Revornix',
		url: 'https://revornix.com',
		domain: 'revornix.com',
		category: 'AI 信息工作台 · 开源',
		title: '把信息过载，转化为可执行的知识。',
		description:
			'以 AI Agent 为核心的媒体流一站式管理平台。从网页、插件、PDF、Office 文档与 API 采集碎片信息，自动分类、摘要、构建知识图谱，并生成带配图与播客音频的报告。',
		points: [
			'向量存储 + GraphRAG 知识图谱',
			'MCP 客户端 / 服务端双向支持',
			'模型无关，支持完全私有化部署',
		],
		tags: ['Web', 'Chrome 插件', 'iOS', 'npm / pip SDK', '私有化'],
		extra: { label: 'GitHub', href: 'https://github.com/Qingyon-AI/Revornix' },
	},
	{
		key: 'wesmile',
		name: 'WeSmile',
		nameZh: '微校',
		url: 'https://wesmile.chat',
		domain: 'wesmile.chat',
		category: '校园私域社区系统',
		title: '为校园社群准备的一整套系统。',
		description:
			'面向学生会、社团与校园墙运营者。用一套系统替代私信、群聊与表格：学生认证、分级内容分发、匿名树洞、活动报名、二手市集、课程评价、每周 CP 匹配与实时私信。',
		points: [
			'三种学生认证方式，六级可见范围',
			'88 页小程序 + 36 路由 Web 端 + 运营后台',
			'审核、举报与软删除恢复的完整治理链路',
		],
		tags: ['微信小程序', 'Web', '运营后台', 'Spring Boot'],
	},
	{
		key: 'mosael',
		name: 'Mosael',
		url: 'https://mosael.com',
		domain: 'mosael.com',
		category: '本地优先 AI 创作空间',
		title: '让每一个想法，找到自己的时间线。',
		description:
			'住在你电脑里的 AI 视频工作室，从第一个素材到最终发布。无限画布、3D 场景与关键帧、多轨剪辑与字幕、理解项目上下文的 AI Agent，以及可视化自动化工作流。',
		points: [
			'素材与工程默认保存在本地',
			'Blender 场景互通，插件可扩展',
			'多平台发布矩阵与浏览器配置管理',
		],
		tags: ['macOS', 'Windows', 'AI Agent', '工作流'],
		extra: { label: 'GitHub', href: 'https://github.com/Alndaly/Mosael' },
	},
];

export const services = [
	{
		key: 'fde',
		index: '01',
		label: 'FDE · Forward Deployed Engineering',
		title: '前线部署工程',
		summary:
			'工程师直接进入你的业务现场，从真实流程出发设计、开发并上线智能体。不交 PPT，交付能在生产环境跑起来的系统。',
		items: [
			{ k: '业务现场诊断', v: '驻场或远程深度访谈，定位最值得被 AI 改造的环节' },
			{ k: '智能体定制开发', v: '知识库问答、流程自动化、内容生产、数据分析等 Agent' },
			{ k: '系统集成与部署', v: '对接现有 OA / CRM / 数据库，支持私有化与国产模型' },
			{ k: '上线后迭代', v: '基于真实使用数据持续调优，直到指标稳定' },
		],
		meta: [
			{ k: '首个可用版本', v: '2–4 周' },
			{ k: '交付形态', v: '源码 + 部署 + 文档' },
		],
	},
	{
		key: 'coach',
		index: '02',
		label: 'AI Transformation Partnership',
		title: '企业 AI 陪跑',
		summary:
			'按月陪伴团队完成 AI 转型：从认知对齐、工具选型到工作流重构，让团队自己学会用 AI 提效，而不是依赖外包。',
		items: [
			{ k: 'AI 转型路线图', v: '梳理业务全景，给出分阶段、可度量的落地计划' },
			{ k: '团队赋能培训', v: '面向管理层与一线员工的实战工作坊' },
			{ k: '工作流重构', v: '一起把高频重复工作改造为人机协作流程' },
			{ k: '长期技术顾问', v: '选型、评审、答疑，关键决策有人兜底' },
		],
		meta: [
			{ k: '陪跑周期', v: '3 / 6 / 12 个月' },
			{ k: '沟通节奏', v: '周会 + 随时响应' },
		],
	},
];

// 客户信息按保密协议隐去，仅展示场景与交付内容。
export const cases = [
	{
		tag: '知识管理',
		title: '企业知识库与研报智能体',
		body: '为研究型团队搭建资料自动采集、GraphRAG 问答与每日研报生成的智能体，报告通过消息渠道自动推送到成员手中。',
		stack: ['Revornix 内核', 'GraphRAG', '私有化部署'],
	},
	{
		tag: '内容生产',
		title: '短视频内容生产与分发智能体',
		body: '把素材整理、粗剪、字幕生成与多平台发布串成一条自动化工作流，创作者只需要做判断，不再做搬运。',
		stack: ['Mosael 工作流', '多模态模型', '发布矩阵'],
	},
	{
		tag: '社区运营',
		title: '社区内容审核与运营助理',
		body: '为社区运营团队部署内容审核、举报分拣与活动数据整理的智能体，人工只处理边界情况。',
		stack: ['WeSmile 治理体系', '审核 Agent', '运营后台'],
	},
];

export const process = [
	{ step: '诊断', en: 'Discover', body: '1–2 次深度沟通，梳理业务流程，找出 ROI 最高的切入点。' },
	{ step: '原型', en: 'Prototype', body: '一周内给出可交互原型，用真实数据验证价值。' },
	{ step: '部署', en: 'Deploy', body: '工程化上线，对接现有系统，交付源码与文档。' },
	{ step: '陪跑', en: 'Evolve', body: '持续迭代与团队赋能，让智能体真正长在业务里。' },
];

export const opc = [
	{
		title: '决策链最短',
		body: '没有层层转述。你直接和写代码、做设计的人沟通，需求当天就能变成代码。',
	},
	{
		title: 'AI 原生组织',
		body: '我们自己就是智能体的重度用户：研发、设计、运营都由 Agent 协作完成，这套方法论直接交付给你。',
	},
	{
		title: '产品级交付',
		body: '三款自研产品持续运营的经验，意味着交付的不是 Demo，而是经得起真实用户的系统。',
	},
];
