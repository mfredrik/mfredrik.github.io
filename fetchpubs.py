import requests
import json

def check_author(hit, author_id):
    authors = hit['info']['authors']['author']
    for author in authors:
        if author['@pid'] == author_id:
            return True
    return False

def format_authors(hit, alia=None):
    authors = hit['info']['authors']['author']
    author_names = []
    for author in authors:
        author_name = ' '.join([part for part in author['text'].split(' ') if part.isalpha()])
        if alia is not None and author_name in alia:
            author_name = alia[author_name]
        author_names.append(author_name)
    return author_names

if __name__ == '__main__':

    author_name = "matt fredrikson"
    alia = {"Matthew Fredrikson": "Matt Fredrikson"}
    author_id = "38/2612"
    url = f'http://dblp.org/search/publ/api?q={"+".join(author_name.split(" "))}&format=json&h=1000'
    
    tags = {
        "Journal Articles": "journal",
        "Conference and Workshop Papers": "conference",
        "Informal and Other Publications": "tech report",
        "Books and Theses": "chapter",
        "Parts in Books or Collections": "chapter"
    }

    response = requests.get(url)
    if response.status_code == 200:
        data = json.loads(response.content)

    else:
        print('An error occurred while fetching data from DBLP')
        print(response.content)
        sys.exit(-1)
    
    with open('dblp.json', 'w') as f:
        json.dump(data, f, indent=4)

    hits = data['result']['hits']['hit']
    pubs = []
    for i, hit in enumerate(hits):
        if check_author(hit, author_id):
            pub = {
                'title': hit['info']['title'],
                'authors': format_authors(hit),
                'venue': f"{hit['info']['venue']} {hit['info']['year']}",
                'year': hit['info']['year'],
                'pdf': hit['info']['ee'],
                'tags': [tags[hit['info']['type']]],
                'cats': [],
                'abbrv': '',
                'order': i
            }
            pubs.append(pub)
        else:
            print('No match')
            print(hit['info']['title'])
    
    pubs = sorted(pubs, key=lambda x: f"{x['year']}.{-x['order']}", reverse=True)

    unique_pubs = []
    unique_titles = []
    for pub in pubs:
        if pub['title'] not in unique_titles:
            unique_pubs.append(pub)
            unique_titles.append(pub['title'])
        else:
            first_pub = unique_pubs[unique_titles.index(pub['title'])]
            first_pub['pdf'] = pub['pdf']
    
    pubs = [pub | {"order": i} for i, pub in enumerate(unique_pubs)]
        
    with open('pubs.js', 'w') as f:
        f.write(f"pubs = {json.dumps(pubs, indent=4)}")