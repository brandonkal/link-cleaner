const RULES = {
  providers: {
    amazon: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}',
      rules: [
        'p[fd]_rd_[a-z]*',
        'qid',
        'srs?',
        '__mk_[a-z]{1,3}_[a-z]{1,3}',
        'spIA',
        'ms3_c',
        '[a-z%0-9]*ie',
        'refRID',
        'colii?d',
        '[^a-z%0-9]adId',
        'qualifier',
        '_encoding',
        'smid',
        'field-lbr_brands_browse-bin',
        'ref_?',
        'th',
        'sprefix',
        'crid',
        'keywords',
        'cv_ct_[a-z]+',
        'linkCode',
        'creativeASIN',
        'ascsubtag',
        'aaxitk',
        'hsa_cr_id',
        'sb-ci-[a-z]+',
        'rnid',
        'dchild',
        'camp',
        'creative',
        's',
      ],
      rawRules: ['\\/ref=[^/?]*'],
      referralMarketing: ['tag', 'ascsubtag'],
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/gp\\/.*?(?:redirector.html|cart\\/ajax-update.html|video\\/api\\/)',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/(?:hz\\/reviews-render\\/ajax\\/|message-us\\?|s\\?)',
      ],
    },
    'amazon search': {
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/s\\?',
      rules: [
        'p[fd]_rd_[a-z]*',
        'qid',
        'srs?',
        '__mk_[a-z]{1,3}_[a-z]{1,3}',
        'spIA',
        'ms3_c',
        '[a-z%0-9]*ie',
        'refRID',
        'colii?d',
        '[^a-z%0-9]adId',
        'qualifier',
        '_encoding',
        'smid',
        'field-lbr_brands_browse-bin',
        'ref_?',
        'th',
        'sprefix',
        'crid',
        'cv_ct_[a-z]+',
        'linkCode',
        'creativeASIN',
        'ascsubtag',
        'aaxitk',
        'hsa_cr_id',
        'sb-ci-[a-z]+',
        'rnid',
        'dchild',
        'camp',
        'creative',
      ],
      rawRules: ['\\/ref=[^/?]*'],
      referralMarketing: ['tag'],
    },
    'fls-na.amazon': {
      completeProvider: true,
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?fls-na\\.amazon(?:\\.[a-z]{2,}){1,}',
    },
    google: {
      forceRedirection: true,
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}',
      rules: [
        'ved',
        'bi[a-z]*',
        'gfe_[a-z]*',
        'ei',
        'source',
        'gs_[a-z]*',
        'site',
        'oq',
        'esrc',
        'uact',
        'cd',
        'cad',
        'gws_[a-z]*',
        'atyp',
        'vet',
        'zx',
        '_u',
        'je',
        'dcr',
        'ie',
        'sei',
        'sa',
        'dpr',
        'btn[a-z]*',
        'usg',
        'cd',
        'cad',
        'uact',
        'aqs',
        'sourceid',
        'sxsrf',
        'rlz',
        'i-would-rather-use-firefox',
        'pcampaignid',
      ],
      referralMarketing: ['referrer'],
      exceptions: [
        '^https?:\\/\\/mail\\.google\\.com\\/mail\\/u\\/',
        '^https?:\\/\\/(?:docs|accounts)\\.google(?:\\.[a-z]{2,}){1,}',
        '^https?:\\/\\/([a-z0-9-\\.])*drive\\.google\\.com\\/videoplayback',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}(?:\\/upload)?\\/drive\\/',
        '^https?:\\/\\/news\\.google\\.com.*\\?hl=.',
        '^https?:\\/\\/hangouts\\.google\\.com\\/webchat.*?zx=.',
        '^https?:\\/\\/client-channel\\.google\\.com\\/client-channel.*?zx=.',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/s\\?tbm=map.*?gs_[a-z]*=.',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/(?:complete\\/search|setprefs|searchbyimage)',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/(?:appsactivity|aclk\\?)',
      ],
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/url\\?.*?(?:url|q)=(https?[^&]+)',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/.*?adurl=([^&]+)',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/amp\\/s\\/([^&]+)',
      ],
    },
    googleSearch: {
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/search\\?',
      rules: ['client', 'sclient'],
    },
    googlesyndication: {
      completeProvider: true,
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googlesyndication\\.com',
    },
    doubleclick: {
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?doubleclick(?:\\.[a-z]{2,}){1,}',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?doubleclick(?:\\.[a-z]{2,}){1,}\\/.*?tag_for_child_directed_treatment=;%3F([^&]*)',
      ],
    },
    googleadservices: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googleadservices\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googleadservices\\.com\\/.*?adurl=([^&]*)',
      ],
    },
    globalRules: {
      urlPattern: '.*',
      rules: [
        '(?:%3F)?utm(?:_[a-z_]*)?',
        '(?:%3F)?ga_[a-z_]+',
        '(?:%3F)?yclid',
        '(?:%3F)?_openstat',
        '(?:%3F)?fb_action_(?:types|ids)',
        '(?:%3F)?fb_(?:source|ref)',
        '(?:%3F)?fbclid',
        '(?:%3F)?action_(?:object|type|ref)_map',
        '(?:%3F)?gs_l',
        '(?:%3F)?mkt_tok',
        '(?:%3F)?hmb_(?:campaign|medium|source)',
        '(?:%3F)?ref_?',
        '(?:%3F)?referrer',
        '(?:%3F)?gclid',
        '(?:%3F)?otm_[a-z_]*',
        '(?:%3F)?cmpid',
        '(?:%3F)?os_ehash',
        '(?:%3F)?_ga',
        '(?:%3F)?_gl',
        '(?:%3F)?__twitter_impression',
        '(?:%3F)?wt_?z?mc',
        '(?:%3F)?wtrid',
        '(?:%3F)?[a-z]?mc',
        '(?:%3F)?dclid',
        'Echobox',
        '(?:%3F)?spm',
        '(?:%3F)?vn(?:_[a-z]*)+',
        '(?:%3F)?tracking_source',
        '(?:%3F)?ceneo_spo',
      ],
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?matrix\\.org\\/_matrix\\/',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(?:cloudflare\\.com|prismic\\.io|tangerine\\.ca|gitlab\\.com)',
        '^https?:\\/\\/myaccount.google(?:\\.[a-z]{2,}){1,}',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gcsip\\.(?:com|nl)[^?]*\\?.*?&?ref_?=.',
        '^https?:\\/\\/[^/]+/[^/]+/[^/]+\\/-\\/refs\\/switch[^?]*\\?.*?&?ref_?=.',
        '^https?:\\/\\/bugtracker\\.[^/]*\\/[^?]+\\?.*?&?ref_?=[^/?&]*',
        '^https?:\\/\\/comment-cdn\\.9gag\\.com\\/.*?comment-list.json\\?',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?battle\\.net\\/login',
        '^https?:\\/\\/blizzard\\.com\\/oauth2',
        '^https?:\\/\\/kreditkarten-banking\\.lbb\\.de',
        '^https?:\\/\\/www\\.tinkoff\\.ru',
        '^https?:\\/\\/www\\.cyberport\\.de\\/adscript\\.php',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tweakers\\.net\\/ext\\/lt\\.dsp\\?.*?(?:%3F)?&?ref_?=.',
        '^https?:\\/\\/git(lab)?\\.[^/]*\\/[^?]+\\?.*?&?ref_?=[^/?&]*',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/message-us\\?',
        '^https?:\\/\\/authorization\\.td\\.com',
        '^https?:\\/\\/support\\.steampowered\\.com',
        '^https?:\\/\\/privacy\\.vakmedianet\\.nl\\/.*?ref=',
        '^https?:\\/\\/sso\\.serverplan\\.com\\/manage2fa\\/check\\?ref=',
        '^https?:\\/\\/login\\.meijer\\.com\\/.*?\\?ref=',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/(?:login_alerts|ajax|should_add_browser)/',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/groups\\/member_bio\\/bio_dialog\\/',
        '^https?:\\/\\/api\\.taiga\\.io',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gog\\.com\\/click\\.html',
        '^https?:\\/\\/login\\.progressive\\.com',
        '^https?:\\/\\/www\\.sephora\\.com\\/api\\/',
        '^https?:\\/\\/www\\.contestgirl\\.com',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?agenciatributaria\\.gob\\.es',
        '^https?:\\/\\/login\\.ingbank\\.pl',
        '^wss?:\\/\\/(?:[a-z0-9-]+\\.)*?zoom\\.us',
        '^https?:\\/\\/api\\.bilibili\\.com',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?onet\\.pl\\/[^?]*\\?.*?utm_campaign=.',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?stripe\\.com\\/[^?]+.*?&?referrer=[^/?&]*',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?lichess\\.org\\/login.*?&?referrer=.*?',
        '^https?:\\/\\/like.co\\/api\\/like\\/likebutton\\/[^?]+.*?&?referrer=[^/?&]*',
        '^https?:\\/\\/button.like.co\\/in\\/.*?&?referrer=[^/?&]*',
        '^https?:\\/\\/www\\.mma\\.go\\.kr',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?github\\.com',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?billiger\\.de\\/.*?mc=',
      ],
    },
    adtech: {
      completeProvider: true,
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?adtech(?:\\.[a-z]{2,}){1,}',
    },
    contentpass: {
      completeProvider: true,
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?contentpass\\.(?:net|de)',
    },
    'bf-ad': {
      completeProvider: true,
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bf-ad(?:\\.[a-z]{2,}){1,}',
    },
    'amazon-adsystem': {
      completeProvider: true,
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon-adsystem(?:\\.[a-z]{2,}){1,}',
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon-adsystem(?:\\.[a-z]{2,}){1,}\\/v3\\/oor\\?',
      ],
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon-adsystem(?:\\.[a-z]{2,}){1,}\\/x\\/c\\/.+?\\/([^&]+)',
      ],
    },
    adsensecustomsearchads: {
      completeProvider: true,
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?adsensecustomsearchads(?:\\.[a-z]{2,}){1,}',
    },
    youtube: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com',
      rules: ['feature', 'gclid', 'kw'],
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/signin\\?.*?',
      ],
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/redirect?.*?q=([^&]*)',
      ],
    },
    youtube_pagead: {
      completeProvider: true,
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/pagead',
    },
    youtube_apiads: {
      completeProvider: true,
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/api\\/stats\\/ads',
    },
    facebook: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com',
      rules: [
        'hc_[a-z_%\\[\\]0-9]*',
        '[a-z]*ref[a-z]*',
        '__tn__',
        'eid',
        '__(?:xts|cft)__(?:\\[|%5B)\\d(?:\\]|%5D)',
        'comment_tracking',
        'dti',
        'app',
        'video_source',
        'ftentidentifier',
        'pageid',
        'padding',
        'ls_ref',
        'action_history',
        'tracking',
        'referral_code',
        'referral_story_type',
      ],
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/.*?(plugins|ajax)\\/',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/dialog\\/(?:share|send)',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/groups\\/member_bio\\/bio_dialog\\/',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/photo\\.php\\?',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/privacy\\/specific_audience_selector_dialog\\/',
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/photo\\/download\\/',
      ],
      redirections: [
        '^https?:\\/\\/l[a-z]?\\.facebook\\.com/l\\.php\\?.*?u=(https?%3A%2F%2F[^&]*)',
      ],
    },
    twitter: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?twitter.com',
      rules: ['(?:ref_?)?src', 's', 'cn', 'ref_url', 't'],
      exceptions: ['^https?:\\/\\/twitter.com\\/i\\/redirect'],
    },
    reddit: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?reddit.com',
      rules: [
        '%24deep_link',
        '\\$deep_link',
        'correlation_id',
        'ref_campaign',
        'ref_source',
        '%243p',
        '\\$3p',
        '%24original_url',
        '\\$original_url',
        '_branch_match_id',
      ],
      redirections: [
        '^https?:\\/\\/out\\.reddit\\.com\\/.*?url=([^&]*)',
        '^https?:\\/\\/click\\.redditmail\\.com\\/.*?url=([^&]*)',
      ],
    },
    netflix: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?netflix.com',
      rules: ['trackId', 'tctx', 'jb[a-z]*?'],
    },
    techcrunch: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?techcrunch\\.com',
      rules: ['ncid', 'sr', 'sr_share'],
    },
    bing: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bing(?:\\.[a-z]{2,}){1,}',
      rules: ['cvid', 'form', 'sk', 'sp', 'sc', 'qs', 'qp'],
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bing(?:\\.[a-z]{2,}){1,}\\/WS\\/redirect\\/',
      ],
    },
    tweakers: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tweakers\\.net',
      rules: ['nb', 'u'],
    },
    twitch: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?twitch\\.com',
      rules: ['tt_medium', 'tt_content'],
    },
    vivaldi: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?vivaldi\\.com',
      rules: ['pk_campaign', 'pk_kwd'],
    },
    indeed: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?indeed\\.com',
      rules: ['from', 'alid', '[a-z]*tk'],
      exceptions: ['^https?:\\/\\/(?:[a-z0-9-]+\\.)*?indeed\\.com\\/rc\\/clk'],
    },
    hhdotru: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hh\\.ru',
      rules: ['vss', 't', 'swnt', 'grpos', 'ptl', 'stl', 'exp', 'plim'],
    },
    ebay: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ebay(?:\\.[a-z]{2,}){1,}',
      rules: ['_trkparms', '_trksid', '_from', 'hash'],
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?rover\\.ebay(?:\\.[a-z]{2,}){1,}\\/rover.*mpre=([^&]*)',
      ],
    },
    cnet: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cnet\\.com',
      rules: ['ftag'],
    },
    'imdb.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?imdb\\.com',
      rules: ['ref_', 'pf_rd_[a-z]*'],
    },
    'govdelivery.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?govdelivery\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?links\\.govdelivery\\.com.*\\/track\\?.*(https?:\\/\\/.*)',
      ],
    },
    'walmart.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?walmart\\.com',
      rules: ['u1', 'ath[a-z]*'],
    },
    'net-parade.it': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?net\\-parade\\.it',
      rules: ['pl'],
    },
    'prvnizpravy.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?prvnizpravy\\.cz',
      rules: ['xid'],
    },
    'youku.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youku\\.com',
      rules: ['tpa'],
    },
    'nytimes.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?nytimes\\.com',
      rules: ['smid'],
    },
    'tchibo.de': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tchibo\\.de',
      rules: ['wbdcd'],
    },
    steampowered: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?steampowered\\.com',
      rules: ['snr'],
    },
    steamcommunity: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?steamcommunity\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?steamcommunity\\.com\\/linkfilter\\/\\?url=([^&]*)',
      ],
    },
    'mozaws.net': {
      urlPattern: 'https?:\\/\\/outgoing\\.prod\\.mozaws\\.net\\/',
      redirections: ['https?:\\/\\/[^/]+\\/v1\\/[0-9a-f]{64}\\/(.*)'],
    },
    'shutterstock.com': {
      urlPattern: 'https?:\\/\\/([a-z0-9-.]*\\.)shutterstock\\.com',
      rules: ['src'],
    },
    'mozilla.org': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mozilla\\.org',
      rules: ['src', 'platform', 'redirect_source'],
      exceptions: ['^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mozilla.org\\/api'],
    },
    'readdc.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?readdc\\.com',
      rules: ['ref'],
    },
    'dailycodingproblem.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dailycodingproblem\\.com',
      rules: ['email'],
    },
    'github.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?github\\.com',
      rules: ['email_token', 'email_source'],
    },
    'deviantart.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?deviantart\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?deviantart\\.com\\/.*?\\/outgoing\\?(.*)',
      ],
    },
    'site2.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site2\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site2\\.com.*?\\?.*=(.*)',
      ],
    },
    'site.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site\\.com.*?\\?to=([^&]*)',
      ],
    },
    'site3.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site3\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site3\\.com.*?\\?r=([^&]*)',
      ],
    },
    aliexpress: {
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?aliexpress(?:\\.[a-z]{2,}){1,}',
      rules: [
        'ws_ab_test',
        'btsid',
        'algo_expid',
        'algo_pvid',
        'gps-id',
        'scm[_a-z-]*',
        'cv',
        'af',
        'mall_affr',
        'sk',
        'dp',
        'terminal_id',
        'aff_request_id',
      ],
    },
    'mozillazine.org': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mozillazine\\.org',
      rules: ['sid'],
    },
    '9gag.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?9gag\\.com',
      rules: ['ref'],
      exceptions: [
        '^https?:\\/\\/comment-cdn\\.9gag\\.com\\/.*?comment-list.json\\?',
      ],
    },
    'linksynergy.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linksynergy\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linksynergy\\.com\\/.*?murl=([^&]*)',
      ],
    },
    'giphy.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?giphy\\.com',
      rules: ['ref'],
    },
    'gate.sc': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gate\\.sc',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gate\\.sc\\/.*?url=([^&]*)',
      ],
    },
    'vk.com': {
      urlPattern: '^https?:\\/\\/vk\\.com',
      redirections: ['^https?:\\/\\/vk\\.com\\/away\\.php\\?to=([^&]*)'],
    },
    'woot.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?woot\\.com',
      rules: ['ref_?'],
    },
    'vitamix.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?vitamix\\.com',
      rules: ['_requestid', 'cid', 'dl', 'di', 'sd', 'bi'],
    },
    'curseforge.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?curseforge\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?curseforge\\.com\\/linkout\\?remoteUrl=([^&]*)',
      ],
    },
    'messenger.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?messenger\\.com',
      redirections: ['^https?:\\/\\/l\\.messenger\\.com\\/l\\.php\\?u=([^&]*)'],
    },
    'nypost.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?nypost\\.com',
      rules: ['__twitter_impression'],
    },
    'ozon.ru': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ozon\\.ru',
      rules: ['partner'],
    },
    'norml.org': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?norml\\.org',
      rules: ['link_id', 'can_id', 'source', 'email_referrer', 'email_subject'],
    },
    LinkedIn: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linkedin\\.com',
      rules: ['refId', 'trk', 'li[a-z]{2}'],
    },
    'LinkedIn Learning': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linkedin\\.com\\/learning',
      rules: ['u'],
    },
    'smartredirect.de': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?smartredirect\\.de',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?smartredirect\\.de.*?url=([^&]*)',
      ],
    },
    'SPIEGEL ONLINE': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?spiegel\\.de',
      rules: ['b'],
    },
    'rutracker.org': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?rutracker\\.org',
      redirections: ['.*url=([^&]*)'],
    },
    instagram: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?instagram\\.com',
      rules: ['igshid'],
      redirections: ['.*u=([^&]*)'],
    },
    'lazada.com.my': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?lazada\\.com\\.my',
      rules: ['ad_src', 'did', 'pa', 'mp', 'impsrc', 'cid', 'pos'],
    },
    'imgsrc.ru': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?imgsrc\\.ru',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dlp\\.imgsrc\\.ru\\/go\\/\\d+\\/\\d+\\/\\d+\\/([^&]*)',
      ],
    },
    'boredpanda.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?boredpanda\\.com',
      rules: ['h'],
    },
    'awstrack.me': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?awstrack\\.me',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?awstrack\\.me\\/.*\\/(https?.*?)\\/',
      ],
    },
    'exactag.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?exactag\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?exactag\\.com.*url=([^&]*)',
      ],
    },
    'bahn.de': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bahn\\.de',
      rules: ['dbkanal_[0-9]{3}'],
    },
    'disq.us': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?disq\\.us',
      rules: ['cuid'],
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?disq\\.us\\/.*?url=([^&]*)%3A',
      ],
    },
    'anonym.to': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?anonym\\.to',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?anonym\\.to.*\\?([^&]*)',
      ],
    },
    'moosejaw.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?moosejaw\\.com',
      rules: [
        'cm_lm',
        'cm_mmc',
        'webUserId',
        'spMailingID',
        'spUserID',
        'spJobID',
        'spReportId',
      ],
    },
    'spotify.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?spotify\\.com',
      rules: ['si'],
    },
    yandex: {
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(?:yandex(?:\\.[a-z]{2,}){1,}|ya\\.ru)',
      rules: ['lr', 'redircnt'],
    },
    'healio.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?healio\\.com',
      rules: ['ecp', 'm_bt'],
    },
    'zoho.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?zoho\\.com',
      rules: ['iref'],
    },
    'snapchat.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?snapchat\\.com',
      rules: ['sc_referrer', 'sc_ua'],
    },
    'medium.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?medium\\.com',
      rules: ['source'],
    },
    'swp.de': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?swp\\.de',
      rules: ['source'],
    },
    'wps.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?wps\\.com',
      rules: ['from'],
    },
    'accounts.firefox.com': {
      urlPattern: '^https?:\\/\\/(?:accounts\\.)?firefox\\.com',
      rules: ['context', 'entrypoint', 'form_type'],
    },
    'support.mozilla.org': {
      urlPattern: '^https?:\\/\\/(?:support\\.)?mozilla\\.org',
      rules: ['as'],
    },
    ClearURLsTest: {
      urlPattern:
        '^https?:\\/\\/kevinroebert\\.gitlab\\.io\\/ClearUrls\\/void\\/index\\.html',
      rules: ['test'],
      redirections: [
        '^https?:\\/\\/kevinroebert\\.gitlab\\.io\\/ClearUrls\\/void\\/index\\.html\\?url=([^&]*)',
      ],
    },
    ClearURLsTestBlock: {
      completeProvider: true,
      urlPattern:
        '^https?:\\/\\/kevinroebert\\.gitlab\\.io\\/ClearUrls\\/void\\/block\\.svg',
    },
    ClearURLsTest2: {
      urlPattern: '^https?:\\/\\/test\\.clearurls\\.xyz\\/void\\/index\\.html',
      rules: ['test'],
      redirections: [
        '^https?:\\/\\/test\\.clearurls\\.xyz\\/void\\/index\\.html\\?url=([^&]*)',
      ],
    },
    ClearURLsTestBlock2: {
      completeProvider: true,
      urlPattern: '^https?:\\/\\/test\\.clearurls\\.xyz\\/void\\/block\\.svg',
    },
    'diepresse.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?diepresse\\.com',
      rules: ['from', 'xtor', 'xt_at'],
    },
    'newsletter.lidl.com': {
      urlPattern: '^https?:\\/\\/newsletter\\.lidl(?:\\.[a-z]{2,}){1,}',
      rules: ['x'],
    },
    'allegro.pl': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?allegro\\.pl',
      rules: ['reco_id', 'sid'],
    },
    'backcountry.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?backcountry\\.com',
      rules: [
        'CMP_SKU',
        'MER',
        'mr:trackingCode',
        'mr:device',
        'mr:adType',
        'iv_',
        'CMP_ID',
        'k_clickid',
        'rmatt',
        'INT_ID',
        'ti',
        'fl',
      ],
      referralMarketing: ['mr:referralID'],
    },
    'meetup.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?meetup\\.com',
      rules: ['rv', '_xtd'],
    },
    'apple.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?apple\\.com',
      rules: ['app', 'ign-itsc[a-z]+'],
    },
    'alabout.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?alabout\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?alabout\\.com.*url=([^&]*)',
      ],
    },
    'newyorker.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?newyorker\\.com',
      rules: ['source', 'bxid', 'cndid', 'esrc', 'mbid'],
    },
    'gog.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gog\\.com',
      rules: ['track_click', 'link_id'],
    },
    'tradedoubler.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tradedoubler\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tradedoubler\\.com.*(?:url|_td_deeplink)=([^&]*)',
      ],
    },
    'theguardian.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?theguardian\\.com',
      rules: ['CMP'],
    },
    'srvtrck.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?srvtrck\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?srvtrck\\.com.*url=([^&]*)',
      ],
    },
    'mysku.ru': {
      urlPattern: '^https?:\\/\\/mysku\\.ru',
      redirections: ['^https?:\\/\\/mysku\\.ru.*r=([^&]*)'],
    },
    'admitad.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?admitad\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?admitad\\.com.*ulp=([^&]*)',
      ],
    },
    'taobao.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?taobao\\.com',
      rules: [
        'price',
        'sourceType',
        'suid',
        'ut_sk',
        'un',
        'share_crt_v',
        'sp_tk',
        'cpp',
        'shareurl',
        'short_name',
        'app',
        'scm[_a-z-]*',
        'pvid',
        'algo_expid',
        'algo_pvid',
        'ns',
        'abbucket',
        'ali_refid',
        'ali_trackid',
        'acm',
        'utparam',
        'pos',
        'abtest',
        'trackInfo',
        'utkn',
        'scene',
        'mytmenu',
        'turing_bucket',
        'lygClk',
        'impid',
        'bftTag',
        'bftRwd',
        'spm',
        '_u',
      ],
    },
    'tmall.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tmall\\.com',
      rules: [
        'price',
        'sourceType',
        'suid',
        'ut_sk',
        'un',
        'share_crt_v',
        'sp_tk',
        'cpp',
        'shareurl',
        'short_name',
        'app',
        'scm[_a-z-]*',
        'pvid',
        'algo_expid',
        'algo_pvid',
        'ns',
        'abbucket',
        'ali_refid',
        'ali_trackid',
        'acm',
        'utparam',
        'pos',
        'abtest',
        'trackInfo',
        'user_number_id',
        'utkn',
        'scene',
        'mytmenu',
        'turing_bucket',
        'lygClk',
        'impid',
        'bftTag',
        'bftRwd',
        'activity_id',
      ],
    },
    'tb.cn': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tb\\.cn',
      rules: ['sm'],
    },
    'bilibili.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bilibili\\.com',
      rules: [
        'callback',
        'spm_id_from',
        'from_source',
        'from',
        'seid',
        'share_source',
        'msource',
        'refer_from',
        'share_medium',
        'share_source',
        'share_plat',
        'share_tag',
        'share_session_id',
        'timestamp',
        'unique_k',
      ],
      exceptions: ['^https?:\\/\\/api\\.bilibili\\.com'],
    },
    'm.bilibili.com': {
      urlPattern: '^https?:\\/\\/m\\.bilibili\\.com',
      rules: ['bbid', 'ts'],
    },
    'live.bilibili.com': {
      urlPattern: '^https?:\\/\\/live\\.bilibili\\.com',
      rules: ['visit_id', 'session_id', 'broadcast_type', 'is_room_feed'],
    },
    'marketscreener.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?marketscreener\\.com',
      rules: [
        'type_recherche',
        'mots',
        'noredirect',
        'RewriteLast',
        'lien',
        'aComposeInputSearch',
        'type_recherche_forum',
        'add_mots',
        'countview',
      ],
      exceptions: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?marketscreener\\.com\\/search\\/\\?',
      ],
    },
    'marketscreener.com search': {
      urlPattern:
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?marketscreener\\.com\\/search\\/\\?',
      rules: [
        'type_recherche',
        'noredirect',
        'RewriteLast',
        'lien',
        'aComposeInputSearch',
        'type_recherche_forum',
        'countview',
      ],
    },
    'bestbuy.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bestbuy\\.com',
      rules: ['irclickid', 'irgwc', 'loc', 'acampID', 'mpid', 'intl'],
    },
    'digidip.net': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?digidip\\.net',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?digidip\\.net.*url=([^&]*)',
      ],
    },
    'tiktok.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tiktok\\.com',
      rules: [
        'u_code',
        'preview_pb',
        '_d',
        'timestamp',
        'user_id',
        'share_app_name',
        'share_iid',
        'source',
      ],
    },
    'autoplus.fr': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?autoplus\\.fr',
      rules: ['idprob', 'hash', 'sending_id', 'site_id', 'dr_tracker'],
    },
    'bigfishgames.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bigfishgames\\.com',
      rules: ['pc', 'npc', 'npv[0-9]+', 'npi'],
      rawRules: ['\\?pc$'],
    },
    'dpbolvw.net': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dpbolvw\\.net',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dpbolvw\\.net.*url=([^&]*)',
      ],
    },
    'humblebundle.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?humblebundle\\.com',
      referralMarketing: ['partner'],
    },
    'cafepedagogique.net': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cafepedagogique\\.net',
      rules: ['actId', 'actCampaignType', 'actSource'],
    },
    'bloculus.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bloculus\\.com',
      rules: ['tl_[a-z_]+'],
    },
    'mailpanion.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailpanion\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailpanion\\.com.*destination=([^&]*)',
      ],
    },
    'signtr.website': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?signtr\\.website',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?signtr\\.website.*redirect=([^&]*)',
      ],
    },
    'mailtrack.io': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailtrack\\.io',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailtrack\\.io.*url=([^&]*)',
      ],
    },
    'zillow.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?zillow\\.com',
      rules: ['rtoken'],
    },
    'realtor.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?realtor\\.com',
      rules: ['ex', 'identityID', 'MID', 'RID'],
    },
    'redfin.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?redfin\\.com',
      rules: ['riftinfo'],
    },
    'epicgames.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?epicgames\\.com',
      rules: ['epic_affiliate', 'epic_gameId'],
    },
    'onet.pl': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?onet\\.pl',
      rules: ['srcc', 'utm_v', 'utm_medium', 'utm_source'],
    },
    'allrecipes.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?allrecipes\\.com',
      rules: [
        'internalSource',
        'referringId',
        'referringContentType',
        'clickId',
      ],
    },
    'europe1.fr': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?europe1\\.fr',
      rules: ['xtor'],
    },
    'effiliation.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?effiliation\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?effiliation\\.com.*url=([^&]*)',
      ],
    },
    'argos.co.uk': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?argos\\.co\\.uk',
      rules: [
        'istCompanyId',
        'istFeedId',
        'istItemId',
        'istBid',
        'clickOrigin',
      ],
    },
    'hlserve.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hlserve\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hlserve\\.com.*dest=([^&]*)',
      ],
    },
    'thunderbird.net': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?thunderbird\\.net',
      rules: ['src'],
    },
    'cnbc.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cnbc\\.com',
      rules: ['__source'],
    },
    'roblox.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?roblox\\.com',
      rules: ['refPageId'],
    },
    'cell.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cell\\.com',
      rules: ['_returnURL'],
    },
    'academic.oup.com': {
      urlPattern: '^https?:\\/\\/academic\\.oup\\.com',
      rules: ['redirectedFrom'],
    },
    'flexlinkspro.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?flexlinkspro\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?flexlinkspro\\.com.*url=([^&]*)',
      ],
    },
    'agata88.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?agata88\\.com',
      rules: ['source'],
    },
    'hs.fi': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hs\\.fi',
      rules: ['share'],
    },
    'yle.fi': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?yle\\.fi',
      rules: ['origin'],
    },
    'ccbill.com': {
      urlPattern: '^https?:\\/\\/refer\\.ccbill\\.com',
      redirections: ['^https?:\\/\\/refer\\.ccbill\\.com.*HTML=([^&]*)'],
    },
    flipkart: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?flipkart\\.com',
      rules: [
        'otracker.?',
        'ssid',
        '[cilp]id',
        'marketplace',
        'store',
        'srno',
        'store',
        'ppn',
        'ppt',
        'fm',
        'collection-tab-name',
        'sattr\\[\\]',
        'p\\[\\]',
        'st',
      ],
    },
    'idealo.de': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?idealo\\.de',
      rules: [
        'sid',
        'src',
        'siteId',
        'lcb',
        'leadOutUrl',
        'offerListId',
        'osId',
        'cancelUrl',
        'disc',
      ],
    },
    'idealo-partner.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?idealo-partner\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?idealo-partner\\.com.*trg=([^&]*)',
      ],
    },
    'teletrader.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?teletrader\\.com',
      rules: ['internal'],
    },
    'webgains.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?webgains\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?webgains\\.com.*wgtarget=([^&]*)',
      ],
    },
    'deeplearning.ai': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?deeplearning\\.ai',
      rules: ['ecid', '_hsmi', '_hsenc'],
    },
    'getpocket.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?getpocket\\.com',
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?getpocket\\.com.*url=([^&]*)',
      ],
    },
    'gamespot.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gamespot\\.com',
      rules: ['PostType', 'ServiceType', 'ftag', 'UniqueID', 'TheTime'],
    },
    'tokopedia.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tokopedia\\.com',
      rules: ['src', 'trkid', 'whid'],
      redirections: [
        '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tokopedia\\.com\\/promo.*r=([^&]*)',
      ],
    },
    'wkorea.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?wkorea\\.com',
      rules: ['ddw', 'ds_ch'],
    },
    'eonline.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?eonline\\.com',
      rules: ['source', 'medium', 'content'],
    },
    'reuters.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?reuters\\.com',
      rules: ['taid'],
    },
    'app.adjust.com': {
      urlPattern: '^https?:\\/\\/app\\.adjust\\.com',
      redirections: ['^https?:\\/\\/app\\.adjust\\.com.*redirect=([^&]*)'],
    },
    'change.org': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?change\\.org',
      rules: ['source_location', 'psf_variant', 'share_intent'],
    },
    'ceneo.pl': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ceneo\\.pl',
      rules: ['tag'],
    },
    'wired.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?wired\\.com',
      rules: ['intcid'],
    },
    'alibaba cloud arms': {
      urlPattern: '^https?:\\/\\/arms-retcode\\.aliyuncs\\.com',
      rules: [
        'pid',
        'uid',
        'tag',
        'release',
        'environment',
        'sample',
        'behavior',
        'enableSPA',
        'enableLinkTrace',
        'page',
        'begin',
        'c2',
        'c3',
        'success',
        'code',
        'msg',
        'api',
        'traceId',
        'pv_id',
        'flag',
        'sr',
        'vp',
        'ct',
        '_v',
        'sampling',
        'dl',
        'post_res',
      ],
    },
    nikkei: {
      urlPattern: '^https?://(?:[a-z0-9-]+\\.)*?nikkei\\.co(?:m|\\.jp)',
      rules: ['adid', 'i_cid', 'n_cid', 'waad'],
    },
    weibo: {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?weibo\\.(cn|com)',
      rules: ['weibo_id', 'dt_dapp'],
    },
    'fiverr.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?fiverr\\.com',
      rules: ['context_referrer', 'source', 'ref_ctx_id', 'funnel'],
    },
    'etsy.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?etsy\\.com',
      rules: ['click_key', 'click_sum', 'organic_search_click'],
    },
    'magento.com': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?magento\\.com',
      rules: ['itm_campaign', 'itm_medium', 'itm_source', 'itm_term'],
    },
    'novinky.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?novinky\\.cz',
      rules: [
        'dop_ab_variant',
        'dop_source_zone_name',
        'dop_req_id',
        'dop_id',
        'source',
        'seq_no',
      ],
    },
    'aktualne.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?aktualne\\.cz',
      rules: ['dop_ab_variant', 'dop_source_zone_name', 'dop_req_id', 'dop_id'],
    },
    'seznamzpravy.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?seznamzpravy\\.cz',
      rules: [
        'dop_ab_variant',
        'dop_source_zone_name',
        'dop_req_id',
        'dop_id',
        'source',
        'seq_no',
      ],
    },
    'billiger.de': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?billiger\\.de',
      rules: ['log', 'p'],
    },
    'respekt.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?respekt\\.cz',
      rules: [
        'sznclid',
        'dop_ab_variant',
        'dop_source_zone_name',
        'dop_req_id',
        'dop_id',
      ],
    },
    'faei.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?faei\\.cz',
      rules: [
        'sznclid',
        'dop_ab_variant',
        'dop_source_zone_name',
        'dop_req_id',
        'dop_id',
      ],
    },
    'iprima.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?iprima\\.cz',
      rules: [
        'sznclid',
        'dop_ab_variant',
        'dop_source_zone_name',
        'dop_req_id',
        'dop_id',
      ],
    },
    'nova.cz': {
      urlPattern: '^https?:\\/\\/(?:[a-z0-9-]+\\.)*?nova\\.cz',
      rules: [
        'sznclid',
        'dop_ab_variant',
        'dop_source_zone_name',
        'dop_req_id',
        'dop_id',
      ],
    },
  },
}
;('use strict')
/*
 * ClearURLs
 * Copyright (c) 2017-2022 Kevin Röbert.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Models a hash parameter of a given {@link URL}.
 */
class URLHashParams {
  constructor(url) {
    Object.defineProperty(this, '_params', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    })
    this._params = new Multimap()
    const hash = url.hash.slice(1)
    const params = hash.split('&')
    for (const p of params) {
      const param = p.split('=')
      if (!param[0]) continue
      const key = param[0]
      let value = null
      if (param.length === 2 && param[1]) {
        value = param[1]
      }
      this._params.put(key, value)
    }
  }
  append(name, value = null) {
    this._params.put(name, value)
  }
  delete(name) {
    this._params.delete(name)
  }
  get(name) {
    const [first] = this._params.get(name)
    if (first) {
      return first
    }
    return null
  }
  getAll(name) {
    return this._params.get(name)
  }
  keys() {
    return this._params.keys()
  }
  toString() {
    const rtn = []
    this._params.forEach((key, value) => {
      if (value) {
        rtn.push(key + '=' + value)
      } else {
        rtn.push(key)
      }
    })
    return rtn.join('&')
  }
}
;('use strict')
/*
 * ClearURLs
 * Copyright (c) 2017-2022 Kevin Röbert.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Models a multimap backed by a {@link Set}.
 */
class Multimap {
  constructor() {
    Object.defineProperty(this, '_map', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    })
    Object.defineProperty(this, '_size', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    })
    this._size = 0
    this._map = new Map()
  }
  get size() {
    return this._size
  }
  get(key) {
    const values = this._map.get(key)
    if (values) {
      return new Set(values)
    } else {
      return new Set()
    }
  }
  put(key, value) {
    let values = this._map.get(key)
    if (!values) {
      values = new Set()
    }
    const count = values.size
    values.add(value)
    if (values.size === count) {
      return false
    }
    this._map.set(key, values)
    this._size++
    return true
  }
  has(key) {
    return this._map.has(key)
  }
  hasEntry(key, value) {
    const values = this._map.get(key)
    if (!values) {
      return false
    }
    return values.has(value)
  }
  delete(key) {
    const values = this._map.get(key)
    if (values && this._map.delete(key)) {
      this._size -= values.size
      return true
    }
    return false
  }
  deleteEntry(key, value) {
    const values = this._map.get(key)
    if (values) {
      if (!values.delete(value)) {
        return false
      }
      this._size--
      return true
    }
    return false
  }
  clear() {
    this._map.clear()
    this._size = 0
  }
  entries() {
    const self = this
    function* gen() {
      for (const [key, values] of self._map.entries()) {
        for (const value of values) {
          yield [key, value]
        }
      }
    }
    return gen()
  }
  values() {
    const self = this
    function* gen() {
      for (const [, value] of self.entries()) {
        yield value
      }
    }
    return gen()
  }
  keys() {
    return this._map.keys()
  }
  forEach(callback, thisArg) {
    for (const [key, value] of this.entries()) {
      callback.call(thisArg === undefined ? this : thisArg, key, value, this)
    }
  }
  [Symbol.iterator]() {
    return this.entries()
  }
}
/*
 * ClearURLs
 * Copyright (c) 2017-2020 Kevin Röbert
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*jshint esversion: 6 */
/*
 * This script is responsible for some tools.
 */

// Needed by the sha256 method
const enc = new TextEncoder()

// Max amount of log entries to prevent performance issues
const logThreshold = 5000

/*
 * To support Waterfox.
 */
Array.prototype.rmEmpty = function () {
  return this.filter((v) => v)
}

/*
 * To support Waterfox.
 */
Array.prototype.flatten = function () {
  return this.reduce((a, b) => a.concat(b), [])
}

/**
 * Check if an object is empty.
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isEmpty(obj) {
  return Object.getOwnPropertyNames(obj).length === 0
}

/**
 * Translate a string with the i18n API. TODO: Delete
 *
 * @param {string} string           Name of the attribute used for localization
 * @param {string[]} placeholders   Array of placeholders
 */
function translate(string, ...placeholders) {
  return string
}

/**
 * Reloads the extension. TODO: Delete
 */
function reload() {
  console.log('fake reload')
}

/**
 * Extract the host without port from an url.
 * @param  {URL} url URL as String
 * @return {String}     host as string
 */
function extractHost(url) {
  return url.hostname
}

/**
 * Returns true if the url has a local host.
 * @param  {URL} url URL as object
 * @return {boolean}
 */
function checkLocalURL(url) {
  let host = extractHost(url)

  if (!host.match(/^\d/) && host !== 'localhost') {
    return false
  }

  return (
    ipRangeCheck(host, [
      '10.0.0.0/8',
      '172.16.0.0/12',
      '192.168.0.0/16',
      '100.64.0.0/10',
      '169.254.0.0/16',
      '127.0.0.1',
    ]) || host === 'localhost'
  )
}

/**
 * Return the number of parameters query strings.
 * @param  {String}     url URL as String
 * @return {int}        Number of Parameters
 */
function countFields(url) {
  return [...new URL(url).searchParams].length
}

/**
 * Extract the fragments from an url.
 * @param  {URL} url URL as object
 * @return {URLHashParams}     fragments as URLSearchParams object
 */
function extractFragments(url) {
  return new URLHashParams(url)
}

/**
 * Returns the given URL without searchParams and hash.
 * @param {URL} url the URL as object
 * @return {URL} the url without searchParams and hash
 */
function urlWithoutParamsAndHash(url) {
  let newURL = url.toString()

  if (url.search) {
    newURL = newURL.replace(url.search, '')
  }

  if (url.hash) {
    newURL = newURL.replace(url.hash, '')
  }

  return new URL(newURL)
}

/**
 * Load local saved data, if the browser is offline or
 * some other network trouble.
 */
function loadOldDataFromStore() {
  localDataHash = storage.dataHash
}

/**
 * Increase by one the cleaned counter
 */
function increaseCleanedCounter() {
  if (storage.statisticsStatus) {
    storage.cleanedCounter++
  }
}

/**
 * Returns the current URL.
 * @return {String} [description]
 */
function getCurrentURL() {
  return currentURL
}

/**
 * Check for browser.
 */
function getBrowser() {
  if (typeof InstallTrigger !== 'undefined') {
    return 'Firefox'
  } else {
    return 'Chrome'
  }
}

/**
 * Decodes an URL, also one that is encoded multiple times.
 *
 * @see https://stackoverflow.com/a/38265168
 *
 * @param url   the url, that should be decoded
 */
function decodeURL(url) {
  let rtn = decodeURIComponent(url)

  while (isEncodedURI(rtn)) {
    rtn = decodeURIComponent(rtn)
  }

  // Required (e.g., to fix https://github.com/ClearURLs/Addon/issues/71)
  if (!rtn.startsWith('http')) {
    rtn = 'http://' + rtn
  }

  return rtn
}

/**
 * Returns true, iff the given URI is encoded
 * @see https://stackoverflow.com/a/38265168
 */
function isEncodedURI(uri) {
  return uri !== decodeURIComponent(uri || '')
}

/**
 * Gets the value of at `key` an object. If the resolved value is `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {string} key the key of the object
 * @param {object} defaultValue the default value
 */
Object.prototype.getOrDefault = function (key, defaultValue) {
  return this[key] === undefined ? defaultValue : this[key]
}

function handleError(error) {
  console.error('[ClearURLs ERROR]:' + error)
}

/**
 * Checks if the storage is available.
 */
function isStorageAvailable() {
  return storage.ClearURLsData.length !== 0
}

/**
 * This method calculates the SHA-256 hash as HEX string of the given message.
 * This method uses the native hashing implementations of the SubtleCrypto interface which is supported by all browsers
 * that implement the Web Cryptography API specification and is based on:
 * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
 *
 * @param message message for which the hash should be calculated
 * @returns {Promise<string>} SHA-256 of the given message
 */
async function sha256(message) {
  const msgUint8 = enc.encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))

  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}
/*
 * ClearURLs
 * Copyright (c) 2017-2021 Kevin Röbert
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*jshint esversion: 6 */
/*
 * This script is responsible for the core functionalities.
 */
var providers = []
var prvKeys = []
var siteBlockedAlert = 'javascript:void(0)'
var dataHash
var localDataHash
var os

/**
 * Helper function which remove the tracking fields
 * for each provider given as parameter.
 *
 * @param  {Provider} provider      Provider-Object
 * @param pureUrl                   URL as String
 * @param {boolean} quiet           if the action should be displayed in log and statistics
 * @param {requestDetails} request  the request details
 * @return {Array}                  Array with changes and url fields
 */
function removeFieldsFormURL(provider, pureUrl, quiet = false, request = null) {
  let url = pureUrl
  let domain = ''
  let fragments = ''
  let fields = ''
  let rules = provider.getRules()
  let changes = false
  let rawRules = provider.getRawRules()
  let urlObject = new URL(url)

  if (checkLocalURL(urlObject)) {
    return {
      changes: false,
      url: url,
      cancel: false,
    }
  }

  /*
   * Expand the url by provider redirections. So no tracking on
   * url redirections form sites to sites.
   */
  let re = provider.getRedirection(url)
  if (re !== null) {
    url = decodeURL(re)

    //Log the action
    if (!quiet) {
      pushToLog(pureUrl, url, translate('log_redirect'))
      increaseTotalCounter(1)
    }

    return {
      redirect: true,
      url: url,
    }
  }

  /*
   * Apply raw rules to the URL.
   */
  rawRules.forEach(function (rawRule) {
    let beforeReplace = url
    url = url.replace(new RegExp(rawRule, 'gi'), '')

    if (beforeReplace !== url) {
      //Log the action
      if (storage.loggingStatus && !quiet) {
        pushToLog(beforeReplace, url, rawRule)
      }

      changes = true
    }
  })

  urlObject = new URL(url)
  fields = urlObject.searchParams
  fragments = extractFragments(urlObject)
  domain = urlWithoutParamsAndHash(urlObject).toString()

  /**
   * Only test for matches, if there are fields or fragments that can be cleaned.
   */
  if (fields.toString() !== '' || fragments.toString() !== '') {
    rules.forEach((rule) => {
      const beforeFields = fields.toString()
      const beforeFragments = fragments.toString()
      let localChange = false

      for (const field of fields.keys()) {
        if (new RegExp('^' + rule + '$', 'gi').test(field)) {
          fields.delete(field)
          changes = true
          localChange = true
        }
      }

      for (const fragment of fragments.keys()) {
        if (new RegExp('^' + rule + '$', 'gi').test(fragment)) {
          fragments.delete(fragment)
          changes = true
          localChange = true
        }
      }

      //Log the action
      if (localChange && storage.loggingStatus) {
        let tempURL = domain
        let tempBeforeURL = domain

        if (fields.toString() !== '') tempURL += '?' + fields.toString()
        if (fragments.toString() !== '') tempURL += '#' + fragments.toString()
        if (beforeFields.toString() !== '')
          tempBeforeURL += '?' + beforeFields.toString()
        if (beforeFragments.toString() !== '')
          tempBeforeURL += '#' + beforeFragments.toString()

        if (!quiet) pushToLog(tempBeforeURL, tempURL, rule)
      }
    })

    let finalURL = domain

    if (fields.toString() !== '') finalURL += '?' + fields.toString()
    if (fragments.toString() !== '') finalURL += '#' + fragments.toString()

    url = finalURL
      .replace(new RegExp('\\?&'), '?')
      .replace(new RegExp('#&'), '#')
  }

  return {
    changes: changes,
    url: url,
  }
}

function start() {
  /**
   * Initialize the JSON provider object keys.
   *
   * @param {object} obj
   */
  function getKeys(obj) {
    for (const key in obj) {
      prvKeys.push(key)
    }
  }

  /**
   * Initialize the providers form the JSON object.
   *
   */
  function createProviders() {
    let data = storage.ClearURLsData

    for (let p = 0; p < prvKeys.length; p++) {
      //Create new provider
      providers.push(
        new Provider(
          prvKeys[p],
          data.providers[prvKeys[p]].getOrDefault('completeProvider', false),
          data.providers[prvKeys[p]].getOrDefault('forceRedirection', false)
        )
      )

      //Add URL Pattern
      providers[p].setURLPattern(
        data.providers[prvKeys[p]].getOrDefault('urlPattern', '')
      )

      let rules = data.providers[prvKeys[p]].getOrDefault('rules', [])
      //Add rules to provider
      for (let r = 0; r < rules.length; r++) {
        providers[p].addRule(rules[r])
      }

      let rawRules = data.providers[prvKeys[p]].getOrDefault('rawRules', [])
      //Add raw rules to provider
      for (let raw = 0; raw < rawRules.length; raw++) {
        providers[p].addRawRule(rawRules[raw])
      }

      let referralMarketingRules = data.providers[prvKeys[p]].getOrDefault(
        'referralMarketing',
        []
      )
      //Add referral marketing rules to provider
      for (
        let referralMarketing = 0;
        referralMarketing < referralMarketingRules.length;
        referralMarketing++
      ) {
        providers[p].addReferralMarketing(
          referralMarketingRules[referralMarketing]
        )
      }

      let exceptions = data.providers[prvKeys[p]].getOrDefault('exceptions', [])
      //Add exceptions to provider
      for (let e = 0; e < exceptions.length; e++) {
        providers[p].addException(exceptions[e])
      }

      let redirections = data.providers[prvKeys[p]].getOrDefault(
        'redirections',
        []
      )
      //Add redirections to provider
      for (let re = 0; re < redirections.length; re++) {
        providers[p].addRedirection(redirections[re])
      }

      let methods = data.providers[prvKeys[p]].getOrDefault('methods', [])
      //Add HTTP methods list to provider
      for (let re = 0; re < methods.length; re++) {
        providers[p].addMethod(methods[re])
      }
    }
  }

  /**
   * Convert the external data to Objects and
   * call the create provider function.
   *
   * @param  {String} retrievedText - pure data form github
   */
  function toObject(retrievedText) {
    getKeys(storage.ClearURLsData.providers)
    createProviders()
  }

  /**
   * Deactivates ClearURLs, if no rules can be downloaded and also no old rules in storage
   */
  function deactivateOnFailure() {
    if (storage.ClearURLsData.length === 0) {
      storage.globalStatus = false
      storage.dataHash = ''
      changeIcon()
      storeHashStatus(5)
    }
  }

  /**
   * Get the hash for the rule file on GitLab.
   * Check the hash with the hash form the local file.
   * If the hash has changed, then download the new rule file.
   * Else do nothing.
   */
  function getHash() {
    //Get the target hash from GitLab
    const response = fetch(storage.hashURL).then(async (response) => {
      return {
        hash: (await response.text()).trim(),
        status: response.status,
      }
    })

    response
      .then((result) => {
        if (result.status === 200 && result.hash) {
          dataHash = result.hash

          if (dataHash !== localDataHash.trim()) {
            fetchFromURL()
          } else {
            toObject(storage.ClearURLsData)
            storeHashStatus(1)
          }
        } else {
          throw 'The status code was not okay or the given hash were empty.'
        }
      })
      .catch((error) => {
        console.error(
          '[ClearURLs]: Could not download the rules hash from the given URL due to the following error: ',
          error
        )
        dataHash = false
        deactivateOnFailure()
      })
  }

  /*
   * ##################################################################
   * # Fetch Rules & Exception from URL                               #
   * ##################################################################
   */
  function fetchFromURL() {
    const response = fetch(storage.ruleURL).then(async (response) => {
      return {
        data: (await response.clone().text()).trim(),
        hash: await sha256((await response.text()).trim()),
        status: response.status,
      }
    })

    response
      .then((result) => {
        if (result.status === 200 && result.data) {
          if (result.hash === dataHash.trim()) {
            storage.ClearURLsData = result.data
            storage.dataHash = result.hash
            storeHashStatus(2)
          } else {
            storeHashStatus(3)
            console.error(
              'The hash does not match. Expected `' +
                result.hash +
                '` got `' +
                dataHash.trim() +
                '`'
            )
          }
          storage.ClearURLsData = JSON.parse(storage.ClearURLsData)
          toObject(storage.ClearURLsData)
        } else {
          throw 'The status code was not okay or the given rules were empty.'
        }
      })
      .catch((error) => {
        console.error(
          '[ClearURLs]: Could not download the rules from the given URL due to the following error: ',
          error
        )
        deactivateOnFailure()
      })
  }

  // ##################################################################

  /*
   * ##################################################################
   * # Supertyp Provider                                              #
   * ##################################################################
   */
  /**
   * Declare constructor
   *
   * @param {String} _name                Provider name
   * @param {boolean} _completeProvider    Set URL Pattern as rule
   * @param {boolean} _forceRedirection    Whether redirects should be enforced via a "tabs.update"
   * @param {boolean} _isActive            Is the provider active?
   */
  function Provider(
    _name,
    _completeProvider = false,
    _forceRedirection = false,
    _isActive = true
  ) {
    let name = _name
    let urlPattern
    let enabled_rules = {}
    let disabled_rules = {}
    let enabled_exceptions = {}
    let disabled_exceptions = {}
    let canceling = _completeProvider
    let enabled_redirections = {}
    let disabled_redirections = {}
    let active = _isActive
    let enabled_rawRules = {}
    let disabled_rawRules = {}
    let enabled_referralMarketing = {}
    let disabled_referralMarketing = {}
    let methods = []

    if (_completeProvider) {
      enabled_rules['.*'] = true
    }

    /**
     * Returns whether redirects should be enforced via a "tabs.update"
     * @return {boolean}    whether redirects should be enforced
     */
    this.shouldForceRedirect = function () {
      return _forceRedirection
    }

    /**
     * Returns the provider name.
     * @return {String}
     */
    this.getName = function () {
      return name
    }

    /**
     * Add URL pattern.
     *
     * @require urlPatterns as RegExp
     */
    this.setURLPattern = function (urlPatterns) {
      urlPattern = new RegExp(urlPatterns, 'i')
    }

    /**
     * Return if the Provider Request is canceled
     * @return {Boolean} isCanceled
     */
    this.isCaneling = function () {
      return canceling
    }

    /**
     * Check the url is matching the ProviderURL.
     *
     * @return {boolean}    ProviderURL as RegExp
     */
    this.matchURL = function (url) {
      return urlPattern.test(url) && !this.matchException(url)
    }

    /**
     * Apply a rule to a given tuple of rule array.
     * @param enabledRuleArray      array for enabled rules
     * @param disabledRulesArray    array for disabled rules
     * @param {String} rule         RegExp as string
     * @param {boolean} isActive    Is this rule active?
     */
    this.applyRule = (
      enabledRuleArray,
      disabledRulesArray,
      rule,
      isActive = true
    ) => {
      if (isActive) {
        enabledRuleArray[rule] = true

        if (disabledRulesArray[rule] !== undefined) {
          delete disabledRulesArray[rule]
        }
      } else {
        disabledRulesArray[rule] = true

        if (enabledRuleArray[rule] !== undefined) {
          delete enabledRuleArray[rule]
        }
      }
    }

    /**
     * Add a rule to the rule array
     * and replace old rule with new rule.
     *
     * @param {String} rule        RegExp as string
     * @param {boolean} isActive   Is this rule active?
     */
    this.addRule = function (rule, isActive = true) {
      this.applyRule(enabled_rules, disabled_rules, rule, isActive)
    }

    /**
     * Return all active rules as an array.
     *
     * @return Array RegExp strings
     */
    this.getRules = function () {
      if (!storage.referralMarketing) {
        return Object.keys(
          Object.assign(enabled_rules, enabled_referralMarketing)
        )
      }

      return Object.keys(enabled_rules)
    }

    /**
     * Add a raw rule to the raw rule array
     * and replace old raw rule with new raw rule.
     *
     * @param {String} rule        RegExp as string
     * @param {boolean} isActive   Is this rule active?
     */
    this.addRawRule = function (rule, isActive = true) {
      this.applyRule(enabled_rawRules, disabled_rawRules, rule, isActive)
    }

    /**
     * Return all active raw rules as an array.
     *
     * @return Array RegExp strings
     */
    this.getRawRules = function () {
      return Object.keys(enabled_rawRules)
    }

    /**
     * Add a referral marketing rule to the referral marketing array
     * and replace old referral marketing rule with new referral marketing rule.
     *
     * @param {String} rule        RegExp as string
     * @param {boolean} isActive   Is this rule active?
     */
    this.addReferralMarketing = function (rule, isActive = true) {
      this.applyRule(
        enabled_referralMarketing,
        disabled_referralMarketing,
        rule,
        isActive
      )
    }

    /**
     * Add a exception to the exceptions array
     * and replace old with new exception.
     *
     * @param {String} exception   RegExp as string
     * @param {Boolean} isActive   Is this exception active?
     */
    this.addException = function (exception, isActive = true) {
      if (isActive) {
        enabled_exceptions[exception] = true

        if (disabled_exceptions[exception] !== undefined) {
          delete disabled_exceptions[exception]
        }
      } else {
        disabled_exceptions[exception] = true

        if (enabled_exceptions[exception] !== undefined) {
          delete enabled_exceptions[exception]
        }
      }
    }

    /**
     * Add a HTTP method to methods list.
     *
     * @param {String} method HTTP Method Name
     */
    this.addMethod = function (method) {
      if (methods.indexOf(method) === -1) {
        methods.push(method)
      }
    }

    /**
     * Check the requests' method.
     *
     * @param {requestDetails} details Requests details
     * @returns {boolean} should be filtered or not
     */
    this.matchMethod = function (details) {
      if (!methods.length) return true
      return methods.indexOf(details['method']) > -1
    }

    /**
     * Private helper method to check if the url
     * an exception.
     *
     * @param  {String} url     RegExp as string
     * @return {boolean}        if matching? true: false
     */
    this.matchException = function (url) {
      let result = false

      //Add the site blocked alert to every exception
      if (url === siteBlockedAlert) return true

      for (const exception in enabled_exceptions) {
        if (result) break

        let exception_regex = new RegExp(exception, 'i')
        result = exception_regex.test(url)
      }

      return result
    }

    /**
     * Add a redirection to the redirections array
     * and replace old with new redirection.
     *
     * @param {String} redirection   RegExp as string
     * @param {Boolean} isActive     Is this redirection active?
     */
    this.addRedirection = function (redirection, isActive = true) {
      if (isActive) {
        enabled_redirections[redirection] = true

        if (disabled_redirections[redirection] !== undefined) {
          delete disabled_redirections[redirection]
        }
      } else {
        disabled_redirections[redirection] = true

        if (enabled_redirections[redirection] !== undefined) {
          delete enabled_redirections[redirection]
        }
      }
    }

    /**
     * Return all redirection.
     *
     * @return url
     */
    this.getRedirection = function (url) {
      let re = null

      for (const redirection in enabled_redirections) {
        let result = url.match(new RegExp(redirection, 'i'))

        if (result && result.length > 0 && redirection) {
          re = new RegExp(redirection, 'i').exec(url)[1]

          break
        }
      }

      return re
    }
  }

  /**
   * Call loadOldDataFromStore, getHash, counter, status and log functions
   */

  loadOldDataFromStore()
  getHash()
}
/*
 * ClearURLs
 * Copyright (c) 2017-2020 Kevin Röbert
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*jshint esversion: 6 */
/*
 * This script is responsible for the storage.
 */
var storage = []
storage.ClearURLsData = RULES
var hasPendingSaves = false
var pendingSaves = new Set()

/**
 * Returns the storage as JSON.
 */
function storageAsJSON() {
  let json = {}

  Object.entries(storage).forEach(([key, value]) => {
    json[key] = storageDataAsString(key)
  })

  return json
}

/**
 * Converts a given storage data to its string representation.
 * @param key           key of the storage data
 * @returns {string}    string representation
 */
function storageDataAsString(key) {
  let value = storage[key]

  switch (key) {
    case 'ClearURLsData':
    case 'log':
      return JSON.stringify(value)
    case 'types':
      return value.toString()
    default:
      return value
  }
}

/**
 * Start sequence for ClearURLs.
 */
function genesis() {
  initStorage({})
  start()
  //   browser.storage.local.get(null).then((items) => {

  //     // Start the clearurls.js
  //   }, handleError)
}

/**
 * Return the value under the key.
 * @param  {String} key
 * @return {Object}
 */
function getData(key) {
  return storage[key]
}

/**
 * Return the entire storage object.
 * @return {Object}
 */
function getEntireData() {
  return storage
}

/**
 * Save the value under the key on the RAM.
 *
 * Note: To store the data on the hard disk, one of
 *  deferSaveOnDisk(), saveOnDisk(), or saveOnExit()
 *  must be called.
 * @param {String} key
 * @param {Object} value
 */
function setData(key, value) {
  switch (key) {
    case 'ClearURLsData':
    case 'log':
      storage[key] = JSON.parse(value)
      break
    case 'hashURL':
    case 'ruleURL':
      storage[key] = replaceOldURLs(value)
      break
    case 'types':
      storage[key] = value.split(',')
      break
    case 'logLimit':
      storage[key] = Math.max(0, Number(value))
      break
    case 'globalurlcounter':
      // migrate from old key
      storage['totalCounter'] = value
      delete storage[key]
      break
    case 'globalCounter':
      // migrate from old key
      storage['cleanedCounter'] = value
      delete storage[key]
      break
    default:
      storage[key] = value
  }
}

/**
 * Set default values, if the storage is empty.
 * @param  {Object} items
 */
function initStorage(items) {
  initSettings()

  if (!isEmpty(items)) {
    Object.entries(items).forEach(([key, value]) => {
      setData(key, value)
    })
  }
}

/**
 * Set default values for the settings.
 */
function initSettings() {
  storage.ClearURLsData = []
  storage.dataHash = ''
  storage.badgedStatus = true
  storage.globalStatus = true
  storage.totalCounter = 0
  storage.cleanedCounter = 0
  storage.hashStatus = 'error'
  storage.loggingStatus = false
  storage.log = { log: [] }
  storage.statisticsStatus = true
  storage.badged_color = '#ffa500'
  storage.hashURL = 'https://rules2.clearurls.xyz/rules.minify.hash'
  storage.ruleURL = 'https://rules2.clearurls.xyz/data.minify.json'
  storage.contextMenuEnabled = true
  storage.historyListenerEnabled = true
  storage.localHostsSkipping = true
  storage.referralMarketing = false
  storage.logLimit = 100
  storage.domainBlocking = true
  storage.pingBlocking = true
  storage.eTagFiltering = false
  storage.watchDogErrorCount = 0

  storage.types = [
    'main_frame',
    'sub_frame',
    'stylesheet',
    'script',
    'image',
    'font',
    'object',
    'xmlhttprequest',
    'ping',
    'csp_report',
    'media',
    'websocket',
    'other',
  ]
  storage.pingRequestTypes = ['ping']
}

/**
 * Replace the old URLs with the
 * new GitLab URLs.
 */
function replaceOldURLs(url) {
  switch (url) {
    case 'https://raw.githubusercontent.com/KevinRoebert/ClearUrls/master/data/rules.hash?flush_cache=true':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/rules.minify.hash'
    case 'https://raw.githubusercontent.com/KevinRoebert/ClearUrls/master/data/data.json?flush_cache=true':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/raw/master/data/rules.hash':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/rules.minify.hash'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/raw/master/data/data.json':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/-/jobs/artifacts/master/raw/rules.min.hash?job=hash%20rules':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/rules.minify.hash'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/raw/master/data/data.min.json':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/raw/master/data/data.minify.json':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/-/jobs/artifacts/master/raw/data.minify.json?job=hash%20rules':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json'
    case 'https://gitlab.com/KevinRoebert/ClearUrls/-/jobs/artifacts/master/raw/rules.minify.hash?job=hash%20rules':
      return 'https://kevinroebert.gitlab.io/ClearUrls/data/rules.minify.hash'
    case 'https://kevinroebert.gitlab.io/ClearUrls/data/data.minify.json':
      return 'https://rules2.clearurls.xyz/data.minify.json'
    case 'https://kevinroebert.gitlab.io/ClearUrls/data/rules.minify.hash':
      return 'https://rules2.clearurls.xyz/rules.minify.hash'
    default:
      return url
  }
}

/**
 * Load local saved data, if the browser is offline or
 * some other network trouble.
 */
function loadOldDataFromStore() {
  localDataHash = storage.dataHash
}

/**
 * Save the hash status to the local storage (RAM).
 * The status can have the following values:
 *  1 "up to date"
 *  2 "updated"
 *  3 "update available"
 *  @param status_code the number for the status
 */
function storeHashStatus(status_code) {
  switch (status_code) {
    case 1:
      status_code = 'hash_status_code_1'
      break
    case 2:
      status_code = 'hash_status_code_2'
      break
    case 3:
      status_code = 'hash_status_code_3'
      break
    case 5:
      status_code = 'hash_status_code_5'
      break
    case 4:
    default:
      status_code = 'hash_status_code_4'
  }

  storage.hashStatus = status_code
}

// Start storage and ClearURLs
genesis()
/*
 * ClearURLs
 * Copyright (c) 2017-2020 Kevin Röbert
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*jshint esversion: 6 */

/**
 * Cleans given URLs. Also do automatic redirection.
 *
 * @param  {String} url     url as string
 * @param {boolean} quiet   if the action should be displayed in log and statistics
 * @return {String}         cleaned URL
 */
function pureCleaning(url, quiet = false) {
  let before = url
  let after = url

  do {
    before = after
    after = _cleaning(before, quiet)
  } while (after !== before) // do recursive cleaning

  return after
}

/**
 * Internal function to clean the given URL.
 */
function _cleaning(url, quiet = false) {
  let cleanURL = url
  const URLbeforeReplaceCount = countFields(url)

  for (let i = 0; i < providers.length; i++) {
    let result = {
      changes: false,
      url: '',
      redirect: false,
      cancel: false,
    }

    if (providers[i].matchURL(cleanURL)) {
      result = removeFieldsFormURL(providers[i], cleanURL, quiet)
      cleanURL = result.url
    }

    if (result.redirect) {
      return result.url
    }
  }

  return cleanURL
}
