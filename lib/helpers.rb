require "nokogiri"

def website
  @website_ref = @website_ref || OpenStruct.new(YAML::load_file(File.dirname(__FILE__) + "/../config.yaml")[:website])
  @website_ref
end

def localize_date(dt)
  months = [
     'Ianuarie',
     'Februarie',
     'Martie',
     'Aprilie',
     'Mai',
     'Iunie',
     'Iulie',
     'August',
     'Septembrie',
     'Octombrie',
     'Noiembrie',
     'Decembrie'
  ]

  dt.day.to_s + " " + months[dt.month-1] + " " + dt.year.to_s
end

def rss_summary_of(html)
  html = html.split(/<![-][-]\s*(read\s*)?more\s*[-][-]>/)[0]
  doc = Nokogiri::HTML(html)

  doc.css("h1").each{|elem| 
    elem["style"] = "font-size: 180%; font-weight: bold;"
    elem.inner_html = "<b>" + elem.inner_html + "<b>"
  }
  doc.css("h2").each{|elem| 
    elem["style"] = "font-size: 150%; font-weight: bold;"
    elem.inner_html = "<b>" + elem.inner_html + "<b>"
  }
  doc.css("h3").each{|elem| 
    elem["style"] = "font-size: 120%; font-weight: bold;"
    elem.inner_html = "<b>" + elem.inner_html + "<b>"
  }

  doc.css("img[class=right]").each{|elem| 
    elem["style"] = "float: right; margin-left: 10px; margin-bottom: 10px;"
    elem["align"] = "right"
  }

  doc.css("img[class=left]").each{|elem| 
    elem["style"] = "float: left; margin-right: 10px; margin-bottom: 10px;"
    elem["align"] = "left"
  }

  doc.at_css("body").inner_html
end

