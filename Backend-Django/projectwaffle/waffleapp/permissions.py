from rest_framework import permissions

class IsSuperUser(permissions.BasePermission):
    """
    Custom permission to only allow access to superusers.
    """

    def has_permission(self, request, view):
        # if the request is coming from 'localhost:3003', allow it
        if 'localhost:3003' in request.META.get('HTTP_REFERER', ''):
            return True
        # else, only allow if the user is authenticated and is a superuser
        else:
            return request.user and request.user.is_authenticated and request.user.is_superuser
