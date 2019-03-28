from glob import glob
import os
import re

### Configuration begin
paths = [
    '_drafts/',
    '_posts/',
]

output = 'tags/'
### Configuration end


files = []
for path in paths:
    files.extend(glob(path + '*.md'))

# print(files)

tags = set()

for filename in files:
    f = open(filename, 'r', encoding='UTF-8')
    enter_front = False
    for line in f.readlines():
        striped_line = line.strip()
        if striped_line == '---':
            if not enter_front:
                enter_front = True
            else:
                enter_front = False
                break
        elif striped_line.startswith('tags:'):
            tags_string = striped_line.replace('tags:', '')
            striped_tags_string = tags_string.strip()
            if striped_tags_string[0] == '[' and striped_tags_string[-1] == ']':
                raw_tags_string = striped_tags_string[1:-1]
                squeezed_raw_tags_string = re.sub(' +', '', raw_tags_string)
                words = squeezed_raw_tags_string.split(',')
            else:
                words = striped_tags_string.split()
            for tag in words:
                tags.add(tag)
            break
    f.close()

print(tags)

if not os.path.isdir(output):
    os.mkdir(output)

for tag in tags:
    filename = output + tag + ".md"
    if not os.path.isfile(filename):
        title = tag.replace('-', ' ')
        f = open(filename, 'w')
        f.write('---\nlayout: page\ntitle: "Tag: \'' + title + '\'"\ntag: ' + tag + '\n---\n\n{% include tags_archive.html %}\n')
        f.close()
