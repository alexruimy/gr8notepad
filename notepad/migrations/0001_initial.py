# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, null=True, blank=True)),
                ('content', models.TextField(null=True, blank=True)),
                ('modified_date', models.DateTimeField(auto_now=True, verbose_name='last modified')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
