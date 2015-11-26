import os
import posixpath
import glob
import json
import copy

from jinja2 import Environment, FileSystemLoader
import scss


# Make static pages
static_out = 'index.html'
template_dir = ['template']
base_file = 'base.html'
project_source_dir = ['projects', 'source']
project_source_pattern = 'project_*_*.json'
template_file = 'project.html'


j2env = Environment(loader=FileSystemLoader(posixpath.join(*template_dir)))
base = j2env.get_template(base_file)
template = j2env.get_template(posixpath.join(*project_source_dir, template_file))

project_sources = []
project_sources.extend(glob.glob(os.path.join(*template_dir, os.path.join(*project_source_dir, project_source_pattern))))
project_sources.sort(key=lambda x: x.split('_')[1], reverse=True)

projects = []
for project_source in project_sources:
    with open(project_source, 'r') as fh:
        project = json.load(fh)
        projects.append(project)

html = template.render(projects=projects)
with open(static_out, 'w') as fh:
    fh.write(html)

    
# Compile scss to css
scss_main = os.path.join('scss', 'main.scss')
css_out = os.path.join('css', 'main.css')

with open(scss_main, 'r') as fh:
    css = scss.compiler.compile_file(scss_main)
    with open(css_out, 'w') as gh:
        gh.write(css)

