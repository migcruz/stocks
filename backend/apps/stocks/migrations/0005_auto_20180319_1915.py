# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-03-19 23:15
from __future__ import unicode_literals

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0004_auto_20180319_1817'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='financials',
            field=jsonfield.fields.JSONField(),
        ),
        migrations.AlterField(
            model_name='company',
            name='time_series_daily',
            field=jsonfield.fields.JSONField(),
        ),
    ]
