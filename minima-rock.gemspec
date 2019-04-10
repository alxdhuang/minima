# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "minima-rock"
  spec.version       = "0.9.4"
  spec.authors       = ["Joel Glovier", "Alexander Huang"]
  spec.email         = ["jglovier@github.com", "alxdhuang@gmail.com"]

  spec.summary       = "A beautiful, minimal and rocky theme for Jekyll."
  spec.homepage      = "https://github.com/alxdhuang/minima-rock"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(data|includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.5"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.3"

  spec.add_development_dependency "bundler"
end
