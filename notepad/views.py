from django.shortcuts import render_to_response

def index_view(request):

  template_name = "notepad.html"
  return render_to_response(template_name)