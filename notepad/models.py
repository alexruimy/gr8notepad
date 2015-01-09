from django.db import models

class NoteManager(models.Manager):

  def get_notes(self):
    return self.order_by('-modified_date')



class Note(models.Model):

  title = models.CharField(max_length = 200, null = True, blank = True)
  content = models.TextField(null = True, blank = True)
  modified_date = models.DateTimeField('last modified',auto_now = True)

  objects = NoteManager()