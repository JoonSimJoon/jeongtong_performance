from django import forms
from .models import Blog,GuestBook

class BlogUpdate(forms.ModelForm):
    class Meta:
        model = Blog
        
        fields = ['title','body']

class GusetBookUpdate(forms.ModelForm):
    class Meta:
        model= GuestBook
        fields = ['name']

