from django.shortcuts import render_to_response
from django.http import HttpResponse
from notepad.models import Note
from django.core import serializers

def index_view(request):

  template_name = "notepad.html"
  return render_to_response(template_name)


def json_view(request):

  json = serializers.serialize('json', Note.objects.all())
  return HttpResponse(json, content_type="application/json")
