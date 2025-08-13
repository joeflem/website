export const POSTS_QUERY = `*[
  _type == "homepage"
]|order(publishedAt desc)[0]{_id, title, description}`;

export const EXPERIENCE_QUERY = `*[_type == "experience"][0]{
  "items": items[] | order(from desc){
    _key,
    logo,
    company,
    jobTitle,
    description,
    from,
    to
  }
}`;

export const AGENT_CONTEXT_QUERY = `*[
  _type == "agentContext"
]|order(publishedAt desc)[0]{_id, description}`;
