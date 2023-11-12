news = [
  {
    "title": "<i>Representation Engineering</i>",
    "blurb": "We introduce and characterize the emerging area of representation engineering (RepE), an approach to enhancing the transparency of AI systems that draws on insights from cognitive neuroscience. RepE places population-level representations, rather than neurons or circuits, at the center of analysis, equipping us with novel methods for monitoring and manipulating high-level cognitive phenomena in deep neural networks",
    "pdf": "https://arxiv.org/abs/2310.01405",
    "code": "https://github.com/andyzoujm/representation-engineering"
  },
  {
    "title": "<i>Universal Attacks on LLMs</i>",
    "blurb": "We demonstrate that it is in fact possible to automatically construct adversarial attacks on LLMs, specifically chosen sequences of characters that, when appended to a user query, will cause the system to obey user commands even if it produces harmful content. Unlike traditional jailbreaks, these are built in an entirely automated fashion, allowing one to create a virtually unlimited number of such attacks. Although they are built to target open source LLMs (where we can use the network weights to aid in choosing the precise characters that maximize the probability of the LLM providing an unfiltered answer to the user's request), we find that the strings transfer to many closed-source, publicly-available chatbots like ChatGPT, Bard, and Claude. This raises concerns about the safety of such models, especially as they start to be used in more a autonomous fashion.",
    "pdf": "https://arxiv.org/abs/2307.15043",
    "code": "https://github.com/llm-attacks/llm-attacks"
  },
  {
    "title": "<i>Globally-Robust Neural Networks</i>",
    "blurb": "This work integrates an efficient differentiable local-robustness verifier into the forward pass of a network during training, yielding networks that are provably robust on all inputs. Notably, these networks can be verified on new points in deployment <i>with no additional overhead</i>. This work will appear at ICML in July.",
    "pdf": "http://www.cs.cmu.edu/~mfredrik/papers/kleino_gloro21.pdf",
    "code": "https://github.com/klasleino/gloro",
  },
  {
    "title": "<i>Capture: Centeralized Library Management for IoT Devices</i>",
    "blurb": "Out-of-date third-party libraries are a huge source of vulnerability in commodity IoT devices. We tackle this challenge by splitting library code onto a secure, centralized hub, thus removing the burden of maintaining critical security patches from vendors. This work will appear at Usenix Security in August.",
    "pdf": "http://www.cs.cmu.edu/~mfredrik/papers/zhang21a.pdf",
    "video": "https://www.youtube.com/watch?v=UfQoZoB7FZA&t=3s&ab_channel=HanZhang"
  },
  {
    "title": "<i>Fast Geometric Projections</i> spotlight at ICLR'21",
    "blurb": "In this paper, we present a fast procedure for checking local robustness on deep networks using only geometric projections. This leads to an efficient, highly-parallel GPU implementation that excels particularly for the L2 norm, where previous approaches that rely on constraints or abstraction have been less effective.",
    "pdf": "https://openreview.net/pdf?id=zWy1uxjDdZJ",
    "code": "https://github.com/klasleino/fast-geometric-projections",
    "slides": "http://www.cs.cmu.edu/~kleino/pdf/iclr21_fgp_slides.pdf"
  },
  {
    "title": "<i>Leave-one-out Unfairness</i>",
    "blurb": "Fair decisions are about more than conditional parity. In this work, we explore the effect that small changes in the composition of training data can have on an individual's outcome under a model, and the ramifications that this has for the responsible application of deep learning to sensitive decisions.",
    "pdf": "https://www.cs.cmu.edu/~mfredrik/papers/emblack_facct21.pdf",
    "code": ""
  },
  {
    "title": "AAAI'21 Tutorial: <i>From Explainability to Model Quality and Back Again",
    "blurb": "This tutorial explores the ways in which explainability can inform questions about the robustness, privacy, and fairness aspects of model quality, and how methods for improving them emerging out of several communities can in turn lead to better outcomes for explainability. We aim to make these findings accessible to a general AI audience, including not only researchers who want to further engage with this direction, but also practitioners who stand to benefit from the results, and policy-makers who want to deepen their technical understanding of these important issues.",
    "video": "https://youtu.be/6KFlcCRja0c",
    "slides": "https://fairlyaccountable.org/aaai-2021-tutorial/doc/AAAI_slides_final.pdf",
    "link": "https://fairlyaccountable.org/aaai-2021-tutorial/"
  }
]

